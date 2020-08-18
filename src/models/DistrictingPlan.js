import { generateId } from "../utils";

export default class DistrictingPlan {
    constructor({ id, idColumn }) {
        if (id) {
            this.id = id;
        } else {
            this.id = generateId(8);
        }

        this.assignment = {};
        this.idColumn = idColumn;
    }
    update(feature, assignment) {
        this.assignment[this.idColumn.getValue(feature)] = assignment;
    }
}
