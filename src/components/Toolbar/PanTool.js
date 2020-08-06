import { html } from "lit-html";
import Tool from "./Tool";

export default class PanTool extends Tool {
    constructor() {
        const img_data = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABtElEQVR4Aez" +
            "WAWYDURSF4SIIsoCgiwiCIgAUUGQBs4QACugyggK6hCAoAgigKIKiyAIGRTC4/QGlcR6PiTH3HL4N/OOOdzfQTbDBO76xQwPmTXBA" + 
            "XPGG9HtBCA1S7xMh7LKfZBS02U8ySrKfZJTVnOTwN8MKDZaY1gaqOMnB7xFnxB8nLPsPhIFvgU583fvs" + 
            "gfYIYZs9UIsQPrIHirLbBtIPSwfSD0sHKj8skwcqPyyzB4qC1oEKHMiBHMiBHMiBHMiBHKiHOZADOZAD" + 
            "OZADOZADDUCSQA7kQA7kQA40caD/m2GLFhfs8QQHYnOcEFccsEgSSMcROrxiniSQjiO0eMY0S6AjosIX" + 
            "1hkCPeAHUemAxdj/QauKSOL/NJ5A9ZHE/2kkgXSkhPQcSc+RCnMkOR3p4kB6a3QO5Eh6jqTnSMU5kp4j" + 
            "6TlST2tGEueM3rYZQaDj7/B7cTSQVoM8MRpIpG+oGw0kaEUjgttLo4HUj9sro4H0HnfqGQ2k3+DjMwYY" + 
            "VA/iwMlmGCQgfDCNTELd4s0wyIAKEK8fBKlmPvhglUEMdIC4Gdpy/UynLsRh6FydCrGOBABk1k0h3bUP" + 
            "JgAAAABJRU5ErkJggg==";
        const icon = html`<img src="${img_data}" alt="Pan" 
            style="display: inline-block; height: 24px !important; z-index: 100;"></img>`;
        super("pan", "Pan", icon);
    }
}
