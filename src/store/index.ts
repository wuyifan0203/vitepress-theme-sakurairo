import { store } from "../utils";
import { globalStore } from "./global";


export function mountStore() {
    store('global',globalStore)
}
