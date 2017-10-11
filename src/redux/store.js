import { createStore } from "redux";
import { rootReducer } from "./reducers";

export function generateStore() {
    return createStore(rootReducer, window.devToolsExtension());
}
