import fs from "fs";
import gulp from "gulp";
import sass from "gulp-dart-sass";
import bundle from "./build/bundle-js";
import {
    bundleWithCacheForDevelopment,
    reload,
    serve
} from "./build/dev-server";

const sources = {
    js: "./src/**/*.js",
    css: "./sass/**/*.scss",
    html: "./html/*.html",
    assets: "./assets/**",
    deployFiles: "./deploy/**"
};

export const clean = () => new Promise(resolve => fs.rmdir("./docs", resolve));

//export const deployFiles = () =>
//    gulp.src(sources.deployFiles).pipe(gulp.dest("./docs"));

export const js = () => bundle();

export const css = () =>
    gulp
        .src(sources.css)
        .pipe(sass())
        .pipe(gulp.dest("./docs/"));

export const css_min = () =>
    gulp
        .src(sources.css)
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest("./docs/"));

export const html = () => gulp.src(sources.html).pipe(gulp.dest("./docs"));

export const assets = () =>
    gulp.src(sources.assets).pipe(gulp.dest("./docs/assets"));

export const build = gulp.series(
    clean,
    //gulp.parallel(js, css, html, assets, deployFiles)
    gulp.parallel(js, css_min, html, assets)
);

export const devBuild = gulp.series(
    clean,
    gulp.parallel(bundleWithCacheForDevelopment, css, html, assets)
);

export const watch = () => {
    gulp.watch(sources.css, gulp.series(css, reload));
    gulp.watch(sources.html, gulp.series(html, reload));
    gulp.watch(sources.js, gulp.series(bundleWithCacheForDevelopment, reload));
    gulp.watch(sources.assets, gulp.series(assets));
};

export const develop = gulp.series(devBuild, serve, watch);
