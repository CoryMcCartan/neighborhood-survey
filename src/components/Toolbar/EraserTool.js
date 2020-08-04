import { html } from "lit-html";
import BrushSlider from "./BrushSlider";
import Tool from "./Tool";

export default class EraserTool extends Tool {
    constructor(brush) {
        //const icon = html`<i class="material-icons">backspace</i>`;
        const icon = html`<img src="assets/eraser-variant.png" alt="Erase"
            style="display: inline-block; height: 1.75em; z-index: 100;"></img>`;
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
