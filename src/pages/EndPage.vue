<template>
  <container>
    <sprite :texture="endPage"></sprite>
    <sprite
      :texture="restartBtn"
      x="226"
      y="514"
      interactive="true"
      @click="startGame"
    ></sprite>
  </container>
</template>

<script>
import endPage from "../assets/end_page.jpg";
import restartBtn from "../assets/restartBtn.png";
export default {
  setup(props, { emit }) {
    console.log("props, {emit}}: ", props, emit);
    const startGame = () => {
      console.log(111);
      emit("change-page", "GamePage");
    };
    return {
      endPage,
      restartBtn,
      startGame,
    };
  },
};
</script>

<style></style>
