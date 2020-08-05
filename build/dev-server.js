import browserSync from "browser-sync";
import bundle from "./bundle-js";

const server = browserSync.create();

export function reload(done) {
    server.reload();
    done();
}

export function serve(done) {
    server.init({
        server: {
            baseDir: "./docs/",
            serveStaticOptions: {
                extensions: ["html"] // pretty urls
            }
        }
    });
    done();
}

let caches = {};
export function bundleWithCacheForDevelopment() {
    return bundle(false, caches);
}
