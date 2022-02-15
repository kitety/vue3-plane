<template>
  <container>
    <sprite :texture="bullet"></sprite>
  </container>
</template>

<script>
import bullet from "../assets/bunny-self.png";

import { onMounted, onUnmounted, reactive } from "vue";
import { game } from "../game";
import config from "../config";

export default {
  setup() {
    return {
      bullet,
    };
  },
};
export function useBullet() {
  const hight = 100;
  const bullets = reactive([]);
  const createBullet = ({ x, y }) => {
    const width = 61;
    const height = 99;
    return {
      x,
      y,
      width,
      height,
    };
  };
  const addBullet = ({ x, y }) => {
    bullets.push(createBullet({ x, y }));
  };
  const removeBullet = (index) => {
    console.log("index: ", index);
    bullets.splice(index, 1);
  };
  const move = () => {
    const handleTicker = () => {
      bullets.forEach((item, index) => {
        item.y -= config.bullet.speed;
        if (item.y < -hight) {
          bullets.splice(index, 1);
        }
      });
    };
    onMounted(() => {
      game.ticker.add(handleTicker);
    });
    onUnmounted(() => {
      game.ticker.remove(handleTicker);
    });
  };
  move();
  return {
    bullets,
    addBullet,
    removeBullet,
  };
}
</script>

<style></style>
