import mapboxgl from "mapbox-gl";
import Layer from "./Layer";

export class MapState {
    constructor(mapContainer, options, mapStyle) {
        this.map = new mapboxgl.Map({
            container: mapContainer,
            style: mapStyle,
            attributionControl: false,
            minZoom: 10,
            pitchWithRotate: false,
            dragPan: true,
            touchZoomRotate: true,
            ...options
        });
        this.nav = new mapboxgl.NavigationControl();
        this.map.addControl(this.nav, "top-left");
        this.mapboxgl = mapboxgl;
    }
}

function addUnits(map, tileset, layerAdder) {
    //const block_color = "#0099cd";
    const block_color = "#202f24";
    const block_color_hover = "#000000";
    const gen_color_hover = "#777777";

    const units = new Layer(
        map,
        {
            id: tileset.sourceLayer,
            source: tileset.sourceLayer,
            "source-layer": tileset.sourceLayer,
            type: "fill",
            paint: {
                "fill-color": ["case",
                    ["boolean", ["feature-state", "hover"], false],
                    ["match", ["feature-state", "color"], 0, 
                        block_color_hover, gen_color_hover],
                    ["match", ["feature-state", "color"], 0, 
                        block_color, "rgba(0, 0, 0, 0)"]
                ],
                "fill-opacity": 0.55
            }
        },
        layerAdder
    );
    const unitsBorders = new Layer(
        map,
        {
            id: "units-borders",
            type: "line",
            source: tileset.sourceLayer,
            "source-layer": tileset.sourceLayer,
            paint: {
                "line-color": "#444444",
                "line-width": ["interpolate", ["linear"], ["zoom"], 9.5, 0, 17, 2],
                "line-opacity": 0.2
            }
        },
        layerAdder
    );

    return { units, unitsBorders };
}

function addOverlay(map, tileset, layerAdder) {
    const color_dem = "rgba(30, 60, 210, 0.375)";
    const color_gop = "rgba(210, 30, 20, 0.475)";
    const midpt = 0.45;

    return new Layer(
        map,
        {
            id: "ovrlay",
            source: tileset.sourceLayer,
            "source-layer": tileset.sourceLayer,
            type: "fill",
            paint: {
                "fill-color": ["interpolate-hcl", 
                    ["linear"], 
                    ["case", ["==", ["get", "pop"], 0], 
                        midpt,
                        ["/", ["get", "pop_white"], ["get", "pop"]], // value
                    ],
                    0, color_dem,
                    midpt, "rgba(255, 255, 255, 0)",
                    1, color_gop
                ]
            }
        },
        layerAdder
    );
}

export function addLayers(map, tileset, layerAdder, showOverlay=false) {
    map.addSource(tileset.sourceLayer, tileset.source);

    const overlay = showOverlay ? addOverlay(map, tileset, layerAdder) : null;
    const { units, unitsBorders } = addUnits(map, tileset, layerAdder);

    return { units, unitsBorders, overlay };
}
