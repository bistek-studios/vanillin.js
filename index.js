import { App } from "./vanillin.js";
import { Counter } from "./components/counter.js";
import { InputThingy } from "./components/input.js";
import { Br } from "./components/linebreak.js";

App(() => {
    return `<!DOCTYPE html><html><head><title>fard</title></head><body>${Counter()}${Br(2)}${InputThingy()}</body></html>`;
});