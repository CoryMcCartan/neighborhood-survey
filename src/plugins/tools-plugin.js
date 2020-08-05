import BrushTool from "../components/Toolbar/BrushTool";
import EraserTool from "../components/Toolbar/EraserTool";
import PanTool from "../components/Toolbar/PanTool";
import Brush from "../map/Brush";
import { download } from "../utils";

export default function ToolsPlugin(editor) {
    const { state, toolbar } = editor;
    const brush = new Brush(state.units, 10, 0);
    brush.on("colorfeature", state.update);
    brush.on("colorend", state.render);

    let tools = [
        new PanTool(),
        new BrushTool(brush, state.parts),
        new EraserTool(brush)
    ];

    for (let tool of tools) {
        toolbar.addTool(tool);
    }
    toolbar.selectTool("brush");
}
