import reducer from "../reducers";
import { render, html } from "lit-html";
import { MapState } from "../map";
import State from "../models/State";
import ToolsPlugin from "../plugins/tools-plugin";
import { generateId } from "../utils";
import UIStateStore from "../models/UIStateStore";
import MiniToolbar from "../components/Toolbar/MiniToolbar";
import mapboxgl from "mapbox-gl";

const plugins = [ToolsPlugin];

export class EmbeddedDistrictr {
    constructor(target, module, options) {
        this.render = this.render.bind(this);
        mapboxgl.accessToken = module.token;

        options = { 
            style: "mapbox://styles/mapbox/outdoors-v11", 
            ...options 
        };

        const targetElement = document.querySelector(target);
        targetElement.classList.add("districtr__embed-container");

        const mapContainer = document.createElement("div");
        const mapContainerId = generateId(8);
        mapContainer.setAttribute("id", mapContainerId);
        mapContainer.style = "height: 100%; width: 100%";

        targetElement.appendChild(mapContainer);
        this.toolbarTarget = document.createElement("div");
        targetElement.appendChild(this.toolbarTarget);

        this.addressMarker = null;
        this.graph = null;
        this.showError = module.errors;
        this.allowProceed = module.allowProceed;

        fetch(module.graph)
            .then(r => r.json())
            .then(g => {
                this.graph = g;
            });

        fetch(module.url)
            .then(r => r.json())
            .then(context => {
                this.bounds = context.units.bounds;
                this.zoomTo = module.zoomTo || context.units.zoomTo || 14;

                this.mapState = new MapState(
                    mapContainerId,
                    {
                        bounds: context.units.bounds,
                        fitBoundsOptions: {
                            padding: {
                                top: 50,
                                right: 50,
                                left: 50,
                                bottom: 50
                            }
                        }
                    },
                    options.style,
                );
                this.mapState.map.on("load", () => {
                    //this.mapState.map.setMaxBounds(
                    //    this.mapState.map.getBounds()
                    //);
                    context.showOverlay = module.showOverlay;
                    context.overlayRule = module.overlayRule;

                    this.state = new State(
                        this.mapState.map,
                        context,
                        () => null
                    );

                    // delayed enabling
                    this.enableMap = function() {
                        if (this.enabled) return;
                        else this.enabled = true;

                        this.store = new UIStateStore(reducer, {toolbar: {}});
                        this.toolbar = new MiniToolbar(this.store, this);

                        for (let plugin of plugins) {
                            plugin(this);
                        }

                        this.store.subscribe(this.render);
                        this.state.subscribe(this.render);

                        this.map.boxZoom.enable();
                        this.map.scrollZoom.enable();
                        this.map.dragPan.enable();
                        this.map.dragRotate.enable();
                        this.map.keyboard.enable();
                        this.map.doubleClickZoom.enable();
                        this.map.touchZoomRotate.enable();

                        // contiguity check
                        let msg_box = document.createElement("div");
                        msg_box.id = "ns__msg-draw";
                        msg_box.className = "ns__msg";
                        msg_box.style.margin = "0";
                        msg_box.style.borderRadius = "0";
                        msg_box.hidden = true;
                        this.toolbarTarget.prepend(msg_box);

                        let timeout_id = -1;
                        let cb = this.checkConnected.bind(this, msg_box);
                        this.toolbar.toolsById.brush.brush.on("mouseup", () => {
                            window.clearTimeout(timeout_id);
                            timeout_id = window.setTimeout(cb, 50);
                        });

                        let clear_btn = document.querySelector("#ns__clear-all");
                        clear_btn.hidden = false;
                        clear_btn.addEventListener("click", () => {
                            this.clearNeighborhood.call(this);
                            window.setTimeout(cb, 50);
                        });
                    };

                    this.disableMap = function() {
                        this.enabled = false;

                        this.map.boxZoom.disable();
                        this.map.scrollZoom.disable();
                        this.map.dragPan.disable();
                        this.map.dragRotate.disable();
                        this.map.keyboard.disable();
                        this.map.doubleClickZoom.disable();
                        this.map.touchZoomRotate.disable();
                    };

                    this.disableMap();
                });
            })
            .catch(e => {
                console.error(e);
                render(
                    html`<h4>An error occurred.</h4>`,
                    targetElement
                );
            });
    }

    get map() {
        return this.mapState.map;
    }

    render() {
        if (!this.toolbarTarget || !this.toolbar) {
            return;
        }
        render(this.toolbar.render(), this.toolbarTarget);
    }

    checkConnected(msg_box) {
        let graph = this.graph;
        if (!graph) return null;
        let assignment = this.state.plan.assignment;

        let visited = {};
        let total = 0;
        for (let id in assignment) {
            if (assignment[id] !== 0) continue;
            visited[id] = false;
            total++;
        }
        
        let walkNeighborhood = function(visited, node) {
            let desc = 1;
            visited[node] = true;
            for (let nbor of graph[node]) {
                if (visited[nbor] === false) {
                    desc += walkNeighborhood(visited, nbor);
                }
            }
            return desc;
        };

        let root = this.homeBlock.id;
        let found = walkNeighborhood(visited, root);
        let ok = found === total;
        if (ok) {
            msg_box.hidden = true;
            msg_box.innerHTML = null;
        } else {
            msg_box.hidden = false;
            msg_box.innerHTML = "Your neighborhood must be in one piece only.";
        }
        this.allowProceed(ok);

        return ok;
    }

    loadAddress(str, searchBox) {
        let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(str)}.json` + 
            `?autocomplete=false&limit=1&bbox=` +
            this.bounds[0][0] + "," +
            this.bounds[0][1] + "," +
            this.bounds[1][0] + "," +
            this.bounds[1][1] +
            `&access_token=${mapboxgl.accessToken}`;

        fetch(url)
            .then(x => x.json()) 
            .then(d => {
                if (d.features.length == 0) {
                    this.showError("Address not found.");
                    return;
                } else {
                    this.showError(null);
                    this.enableMap();
                }

                if (!!searchBox)
                    searchBox.value = d.features[0].place_name;

                let center = d.features[0].center;
                // put down marker
                if (!!this.addressMarker) this.addressMarker.remove();
                this.addressMarker = new mapboxgl.Marker({ color: "#ff4f49" })
                    .setLngLat(center)
                    .addTo(this.map);
                
                // color block once zoomed
                let colorBlock = (function() {
                    let block = this.map.queryRenderedFeatures(
                        this.map.project(center),
                        { layers: [this.state.units.id], validate: false }
                    )[0];
                    if (!block) return;

                    if (!!this.homeBlock) {
                        this.map.setFeatureState(this.homeBlock, {
                            ...this.homeBlock.state,
                            home: false
                        });
                        this.clearNeighborhood.call(this);
                    }

                    this.state.units.setAssignment(block, 0);
                    this.state.plan.assignment[block.id] = 0;
                    this.homeBlock = block;
                    block.state.home = true;
                    console.log(this.homeBlock.id);
                }).bind(this);

                this.map.once("moveend", () => {
                    this.state.layers[0].untilSourceLoaded(colorBlock);
                });

                // zoom to
                this.map.easeTo({ 
                    center,
                    zoom: this.zoomTo,
                });

            });
    }

    getNeighborhood() {
        let assignment = this.state.plan.assignment;
        return Object.keys(assignment).filter(b => assignment[b] === 0).join(",");
    }

    clearNeighborhood() {
        let ids = Object.keys(this.state.plan.assignment);
        let features = map.state.units.querySourceFeatures()
            .filter(x => ids.includes(x.id));
        features.map(x => this.state.units.setAssignment(x, null));
        ids.map(x => { this.state.plan.assignment[x] = null });
        if (!!this.homeBlock) {
            console.log(this.homeBlock.id);
            this.state.units.setAssignment(this.homeBlock, 0);
            this.state.plan.assignment[this.homeBlock.id] = 0;
        }
    }
}


window.MapDraw = (target, module, options) =>
    new EmbeddedDistrictr(target, module, options);


window.showError = function(msg, sel="#ns__msg-search") {
    let msg_box = document.querySelector(sel);

    if (msg !== null) {
        msg_box.hidden = false;
        msg_box.innerHTML = msg;
    } else {
        msg_box.hidden = true;
        msg_box.innerHTML = "&nbsp;";
    }
};


/*
 * Overlay styles
 */

window.BivariateOverlay = function(opts) {
    return {
        "fill-color": ["interpolate-hcl", 
            ["linear"], 
            ["case", ["==", opts.denominator || ["get", "pop"], 0], 
                opts.midpt || 0.5,
                ["/", opts.numerator || ["get", "gop"], 
                    opts.denominator || ["get", "pop"]], // value
            ],
            0, opts.colorLow || "rgb(30, 60, 210)",
            opts.midpt || 0.5, "rgba(255, 255, 255, 0)",
            1, opts.colorHigh || "rgb(210, 30, 20)",
        ],
        "fill-opacity": opts.opacity || 0.375,
    };
}

window.UnivariateOverlay = function(opts) {
    return {
        "fill-color": ["interpolate-hcl", 
            ["linear"], 
            ["case", ["==", opts.denominator || ["get", "pop"], 0], 
                0,
                ["/", opts.numerator || ["get", "dem"], 
                    opts.denominator || ["get", "pop"]], // value
            ],
            0, "rgba(255, 255, 255, 0)",
            1, opts.color || "#c0b010",
        ],
        "fill-opacity": opts.opacity || 0.375,
    };
}

