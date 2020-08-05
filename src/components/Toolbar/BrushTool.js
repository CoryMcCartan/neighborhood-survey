import { html } from "lit-html";
import BrushSlider from "./BrushSlider";
import Tool from "./Tool";

export default class BrushTool extends Tool {
    constructor(brush, colors) {
        const img_data = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABXUlEQVR4Ae3ZEXT" +
            "DYBiF4UGhUBgMCoNBoVAYDmrDQGFQrNNwfgrDwnBQKASCxcEgEJxTITAMFAPfXgj1bH/W5Kev957z+Dmv3itN0zRN0zRNu6QNsUSBPR" +
            "JozUbIYSc2OJ3ihCMpTjiS4oQjKU5Yojhhe8UJKxQnbKk4f8swgJMpjuIojuIojuIojuIojuIojuIojuIojuIojuI43afihPeEOlocRQ" +
            "rHUaRwHEUKx1EkV3EesEGBQyPHGrMOkdzEmeAD1iLFuD2SrzhzVLB/KjFtiZR6iTPFEXamEmO4XwHrKIXrJbCeZnC7HaynNdyuhPWUw+0"+
            "sggNc7hYWQQmXe4RFUMDl3mERZHC3e9SwCFZwtTm+YRHUuPEQZYQ5UlhEb3CxDBZZhbEumt/VSOBqA+xgETzD7VaoYB0csYD7XeP1zFBb"+
            "3OGiNsQCW3yhhjVK5HjBBJqmaZqmaZrmcz/pIiIIU7ugBgAAAABJRU5ErkJggg==";
        const icon = html`<img src="${img_data}" alt="Brush" 
            style="display: inline-block; height: 1.75em; z-index: 100;"></img>`;
        super("brush", "Draw", icon);
        this.brush = brush;
        this.colors = colors;
        this.options = new BrushToolOptions(brush, colors);
    }
    activate() {
        super.activate();
        this.brush.activate();
    }
    deactivate() {
        super.deactivate();
        this.brush.deactivate();
    }
}

class BrushToolOptions {
    constructor(brush, colors, renderToolbar) {
        this.brush = brush;
        this.colors = colors;
        this.renderToolbar = renderToolbar;
        this.changeRadius = this.changeRadius.bind(this);
    }
    changeRadius(e) {
        e.stopPropagation();
        let value = parseInt(e.target.value);
        if (this.brush.radius != value) {
            this.brush.radius = value;
        }
        this.renderToolbar();
    }
    render() {
        return html`${BrushSlider(this.brush.radius, this.changeRadius)}`;
    }
}
