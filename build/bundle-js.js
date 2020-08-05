import { rollup } from "rollup";
import plugins from "./rollup-plugins";

const TARGETS = "> 0.25%, Firefox ESR, not op_mini all, not dead";

export default function bundle(production = true, cache) {
    return rollup({
            external: ['mapbox-gl'],
            input: `./src/views/embedded.js`,
            plugins: plugins(TARGETS, !production),
            cache: !production ? cache : false
        }).then(bundle =>
            bundle.write({
                file: `./docs/embedded.js`,
                format: "umd",
                name: "bundle",
                sourcemap: false,
                globals: {
                    "mapbox-gl": "mapboxgl",
                }
            })
        );
}

