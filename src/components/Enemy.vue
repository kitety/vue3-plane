<template>
  <container>
    <sprite :texture="enemy"></sprite>
  </container>
</template>

<script>
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import enemy from "../assets/enemy.png";
import { game } from "../game";

import { reactive, onMounted, onUnmounted } from "vue";
import config from "../config";

export default {
  setup() {
    return {
      enemy,
    };
  },
};
export function useEnemy({ onAttack } = {}) {
  const createEnemy = ({ x, y }) => {
    const width = 308;
    const height = 207;
    return {
      x,
      y,
      width,
      height,
    };
  };
  const enemys = reactive([
    createEnemy({
      x: 100,
      y: 100,
    }),
  ]);
  const removeEnemy = (index) => {
    enemys.splice(index, 1);
  };
  const handleDestroy = (index) => {
    enemys.splice(index, 1);
  };
  const _move = () => {
    const handleTicker = () => {
      enemys.forEach((item, index) => {
        item.y += config.enemy.speed();
        if (item.y > 1300) {
          handleDestroy(index);
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
  //   move();
  const attack = () => {
    const handleAttack = (e) => {
      switch (e.code) {
        case "Space":
          onAttack && onAttack({ x: enemys.x + 100, y: enemys.y });
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
  //   attack();

  return { enemys,removeEnemy };
}
</script>

<style></style>
