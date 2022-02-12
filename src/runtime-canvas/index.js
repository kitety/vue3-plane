import { createRenderer } from "vue";
import { Container, Sprite, Texture, Text } from "pixi.js";

const renderer = createRenderer({
  createElement: (tag) => {
    let element;
    switch (tag) {
      case "container":
        element = new Container();
        break;

      case "sprite":
        element = new Sprite();

        break;
    }
    return element;
  },
  insert: (el, parent) => {
    if (el) parent.addChild(el);
  },
  remove: (el) => {
    if (el && el.parent) el.parent.removeChild(el);
  },
  setElementText: (el, text) => {
    el.text = text;
  },
  patchProp(el, key, _prevValue, nextValue) {
    switch (key) {
      case "texture":
        el.texture = Texture.from(nextValue);

        break;
      case "onClick":
        el.on("pointertap", nextValue);
        break;
      default:
        el[key] = nextValue;
        break;
    }
  },
  parentNode(el) {
    return el.parent;
  },
  createText(text) {
    return new Text(text);
  },
  nextSibling() {},
  createComment() {},
});
export function createApp(rootComponent) {
  return renderer.createApp(rootComponent);
}
