import { addLayers } from "../map";
import IdColumn from "./IdColumn";
import { addBelowLabels, addBelowSymbols } from "../map/Layer";
import DistrictingPlan from "./DistrictingPlan";


/**
 * Holds all of the state that needs to be updated after
 * each brush stroke. (Mainly the Plan assignment and the
 * population tally.)
 */
export default class State {
    constructor(map, { id, units, showOverlay, ...args }) {
        this.unitsRecord = units;
        this.idColumn = new IdColumn(units.idColumn);
        this.plan = new DistrictingPlan({
            id,
            ...args,
            idColumn: this.idColumn
        });

        this.initializeMapState(
            map,
            units,
            addBelowLabels,
            showOverlay
        );

        this.subscribers = [];

        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
    }
    initializeMapState(map, unitsRecord, layerAdder, showOverlay) {
        unitsRecord.tileset.source.promoteId = {};
        unitsRecord.tileset.source.promoteId[unitsRecord.tileset.sourceLayer] = unitsRecord.idColumn.key;

        const { units, unitsBorders, overlay } = addLayers(
            map,
            unitsRecord.tileset,
            layerAdder,
            showOverlay
        );

        this.units = units;
        this.unitsBorders = unitsBorders;
        this.layers = [units, overlay];
        this.map = map;
    }
    update(feature, part) {
        this.plan.update(feature, part);
    }
    subscribe(f) {
        this.subscribers.push(f);
        this.render();
    }
    render() {
        for (let f of this.subscribers) {
            f();
        }
    }
    hasExpectedData(feature) {
        if (feature === undefined || feature.properties === undefined) {
            return false;
        }
        for (let column of this.columns) {
            if (feature.properties[column.key] === undefined) {
                return false;
            }
        }
        return true;
    }
}
