<template>
  <container>
    <sprite :texture="map" :y="mapY1"></sprite>
    <sprite :texture="map" :y="mapY2"></sprite>
  </container>
</template>

<script>
import map from "../assets/map.jpg";
import { ref, onMounted, onUnmounted } from "vue";
import { game } from "../game";
export default {
  setup() {
    const { mapY1, mapY2 } = useMove();
    return {
      mapY1,
      mapY2,
      map,
    };
  },
};

function useMove() {
  const stageHeight = 1080;
  const mapY1 = ref(0);
  const mapY2 = ref(-stageHeight);
  const speed = ref(4);
  const handleTicker = () => {
    mapY1.value += speed.value;
    mapY2.value += speed.value;
    if (mapY1.value > stageHeight) {
      mapY1.value = -stageHeight;
    }
    if (mapY2.value > stageHeight) {
      mapY2.value = -stageHeight;
    }
  };
  onMounted(() => {
    game.ticker.add(handleTicker);
  });
  onUnmounted(() => {
    game.ticker.remove(handleTicker);
  });
  return { mapY1, mapY2 };
}
</script>

<style></style>
