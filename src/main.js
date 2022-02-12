import App from "./App.vue";
import { getRootContainer } from "./game";
import { createApp } from "./runtime-canvas";

const stage = getRootContainer();
console.warn = () => {};

createApp(App).mount(stage);
