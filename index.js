import { App } from "./vanillin.js";
import { Counter } from "./components/counter.js";
import { InputThingy } from "./components/input.js";

App(() => {
    return `<!DOCTYPE html><html><head><title>fard</title></head><body>${Counter()}<br><br>${InputThingy()}</body></html>`;
});