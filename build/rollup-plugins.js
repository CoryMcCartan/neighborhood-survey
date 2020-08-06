import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default function plugins(targets, development = false) {
    return [
        resolve({ preferBuiltins: false, browser: true }),
        commonjs({ sourceMap: false }),
        babel({
            babelrc: false,
            presets: [
                [
                    "@babel/preset-env",
                    {
                        targets: targets || "> 0.25%, Firefox ESR, not op_mini all, not dead"
                    }
                ]
            ],
            exclude: /node_modules\/(?!(lit-html))/
        }),
        development ? false : terser()
    ].filter(Boolean);
}
