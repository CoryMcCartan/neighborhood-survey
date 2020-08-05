import { combineReducers } from "../utils";
import toolbarReducer from "./toolbar";

export const reducer = combineReducers({
    toolbar: toolbarReducer,
});

export default reducer;
