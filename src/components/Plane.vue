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
export function usePlane() {
  const planeInfo = reactive({
    x: 100,
    y: 500,
  });
  const move = (e) => {
    console.log("e: ", e);
    const speed = 10;
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
    window.addEventListener("keydown", move);
  });
  onUnmounted(() => {
    window.removeEventListener("keydown", move);
  });
  return { planeInfo };
}
</script>

<style></style>
