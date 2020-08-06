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

        fetch(module.graph)
            .then(r => r.json())
            .then(g => {
                this.graph = g;
            });

        fetch(module.url)
            .then(r => r.json())
            .then(context => {
                this.bounds = context.units.bounds;

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
                    options.style
                );
                this.mapState.map.on("load", () => {
                    this.mapState.map.setMaxBounds(
                        this.mapState.map.getBounds()
                    );
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

                        // contiguity check
                        let timeout_id = -1;
                        this.toolbar.toolsById.brush.brush.on("mouseup", () => {
                            window.clearTimeout(timeout_id);
                            timeout_id = window.setTimeout(this.checkConnected.bind(this), 50);
                        });
                    };
                    this.enabled = false;
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

    checkConnected() {
        let graph = this.graph;
        if (!graph) return null;
        let assignment = this.state.plan.assignment;

        let visited = {};
        let total = 0;
        for (let id in assignment) {
            if (assignment[id] != 0) continue;
            visited[id.slice(5)] = false; // CHANGE once not LITTLE ROCK
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

        let root = this.homeBlock.properties.GEOID10.slice(5);
        let found = walkNeighborhood(visited, root);
        this.showError(found !== total ? 
                       "Your neighborhood must be in one piece only." : null);

        return found === total;
    }

    loadAddress(str) {
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

                let center = d.features[0].center;
                // put down marker
                if (!!this.addressMarker) this.addressMarker.remove();
                this.addressMarker = new mapboxgl.Marker({ color: "#ff4f49" })
                    .setLngLat(center)
                    .addTo(this.map);
                
                // zoom to
                this.map.easeTo({ 
                    center,
                    zoom: 15,
                });

                // color block
                let block = this.map.queryRenderedFeatures(
                    this.map.project(center),
                    { layers: [this.state.units.id], validate: false }
                )[0];
                block.state.home = true;
                if (!!this.homeBlock) {
                    this.map.setFeatureState(this.homeBlock, {
                        ...this.homeBlock.state,
                        home: false
                    });
                }
                this.state.units.setAssignment(block, 0);
                this.state.plan.assignment[block.properties.GEOID10] = 0;
                this.homeBlock = block;
            });
    }
}


window.Districtr = (target, module, options) =>
    new EmbeddedDistrictr(target, module, options);


