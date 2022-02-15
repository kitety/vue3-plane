<template>
  <container>
    <sprite :texture="plane"></sprite>
  </container>
</template>

<script>
import plane from "../assets/plane.png";

import { reactive, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    return {
      plane,
    };
  },
};
export function usePlane({ onAttack } = {}) {
  const planeInfo = reactive({
    x: 100,
    y: 500,
    width: 258,
    height: 364,
  });
  const move = () => {
    const speed = 10;
    const handleMove = (e) => {
      switch (e.code) {
        case "ArrowUp":
          planeInfo.y -= speed;
          break;
        case "ArrowRight":
          planeInfo.x += speed;
          break;
        case "ArrowLeft":
          planeInfo.x -= speed;
          break;
        case "ArrowDown":
          planeInfo.y += speed;
          break;

        default:
          break;
      }
    };
    onMounted(() => {
      window.addEventListener("keydown", handleMove);
    });
    onUnmounted(() => {
      window.removeEventListener("keydown", handleMove);
    });
  };
  move();
  const attack = () => {
    const handleAttack = (e) => {
      switch (e.code) {
        case "Space":
          onAttack && onAttack({ x: planeInfo.x+100, y: planeInfo.y });
          break;

        default:
          break;
      }
    };
    onMounted(() => {
      window.addEventListener("keyup", handleAttack);
    });
    onUnmounted(() => {
      window.removeEventListener("keyup", handleAttack);
    });
  };
  attack();

  return { planeInfo };
}
</script>

<style></style>
