<template>
  <container>
    <Map />
    <Plane :x="planeInfo.x" :y="planeInfo.y" />
    <Bullet
      v-for="(item, index) in bullets"
      :key="index"
      :x="item.x"
      :y="item.y"
    />
    <Enemy
      v-for="(item, index) in enemys"
      :key="index"
      :x="item.x"
      :y="item.y"
    />
  </container>
</template>

<script>
import Map from "../components/Map.vue";
import Plane, { usePlane } from "../components/Plane.vue";
import Enemy, { useEnemy } from "../components/Enemy.vue";
import Bullet, { useBullet } from "../components/Bullet.vue";
import { game } from "../game";
import { onMounted, onUnmounted } from "vue";
import { hitObject } from "../utils";
export default {
  components: {
    Map,
    Plane,
    Bullet,
    Enemy,
  },
  setup(props, { emit }) {
    const endGame = () => {
      emit("change-page", "EndPage");
    };
    const { bullets, addBullet, removeBullet } = useBullet();
    const { enemys, removeEnemy } = useEnemy();
    const { planeInfo } = usePlane({
      onAttack({ x, y }) {
        addBullet({ x, y });
      },
    });
    console.log("enemys: ", enemys);
    const handleTicker = () => {
      // 敌军和子弹
      bullets.forEach((item, i) => {
        enemys.forEach((enemy, j) => {
          if (hitObject(item, enemy)) {
            removeBullet(i);
            removeEnemy(j);
          }
        });
      });
      // 敌军和我方飞机
      enemys.forEach((enemy) => {
        if (hitObject(enemy, planeInfo)) {
          endGame();
        }
      });
    };
    onMounted(() => {
      game.ticker.add(handleTicker);
    });
    onUnmounted(() => {
      game.ticker.remove(handleTicker);
    });

    return {
      planeInfo,
      bullets,
      enemys,
    };
  },
};
</script>

<style></style>
