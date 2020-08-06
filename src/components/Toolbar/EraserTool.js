import { html } from "lit-html";
import BrushSlider from "./BrushSlider";
import Tool from "./Tool";

export default class EraserTool extends Tool {
    constructor(brush) {
        const img_data = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/" +
            "xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/" +
            "AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABBElEQVRo3u3Yuw7BYBiH8WdmcLorXIxuRjtuSWKjTiM3YBWjSQ3yJY00aL9TX94n+UbJ7y/" +
            "apkDTNO2fagJz4ARcgSUwjI36tjaQAtnLuQNJbNynWsC6AJ8/49hIG3xtR5TB125EFXxtRtjgo49wgY82wiU++Agf+GAj2sDGE94cbw+" +
            "7EHjzxB5IxZuzkozPgJtkfAacJeMzYCoZnwING7zP+/ynswe6ile84uXgezb4JsX/HoQ4W6BjgweYScYDHCPgD1j+bPJdAuN" +
            "3rr5500IyHqDP8+UhBN7qVvmuRDLeNPKEL7pgJyU+H3WELb70AJcjXOArDXAxwhW+8gBN0zTtN3sAFI5CX1O33XwAAAAldEVYdGRhdG" +
            "U6Y3JlYXRlADIwMjAtMDgtMDRUMDI6NDg6NDkrMDA6MDADjPrkAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA4LTA0VDAyOjQ4O" +
            "jQ5KzAwOjAwctFCWAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=";
        const icon = html`<img src="${img_data}" alt="Erase" 
            style="display: inline-block; height: 1.75em !important; z-index: 100;"></img>`;

        super("eraser", "Erase", icon);
        this.brush = brush;
        this.options = new EraserToolOptions(brush);
    }
    activate() {
        super.activate();
        this.brush.activate();
        this.brush.startErasing();
    }
    deactivate() {
        super.deactivate();
        this.brush.deactivate();
        this.brush.stopErasing();
    }
}

class EraserToolOptions {
    constructor(brush, renderToolbar) {
        this.brush = brush;
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
        return html`
            ${BrushSlider(this.brush.radius, this.changeRadius, {
                title: "Eraser Size"
            })}
        `;
    }
}
