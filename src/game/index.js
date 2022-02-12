import { Application } from "pixi.js";

export const game = new Application({
  width: 720,
  height: 1080,
});
document.body.appendChild(game.view);

export function getRootContainer() {
  return game.stage;
}
