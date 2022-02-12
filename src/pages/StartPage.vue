<template>
  <container>
    <sprite :texture="startPage"></sprite>
    <sprite
      :texture="startBtn"
      x="226"
      y="514"
      interactive="true"
      @click="startGame"
    ></sprite>
  </container>
</template>

<script>
import startPage from "../assets/start_page.jpg";
import startBtn from "../assets/startBtn.png";
export default {
  setup(props, { emit }) {
    console.log("props, {emit}}: ", props, emit);
    const startGame = () => {
      console.log(111);
      emit("change-page", "GamePage");
    };
    return {
      startPage,
      startBtn,
      startGame,
    };
  },
};
</script>

<style></style>
