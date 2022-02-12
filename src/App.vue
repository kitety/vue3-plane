<template>
  <container>
    <StartPage
      v-if="currentPage === 'StartPage'"
      @change-page="handleChangePage"
    />
    <GamePage v-else-if="currentPage === 'GamePage'" />
  </container>
</template>

<script>
import StartPage from "./pages/StartPage.vue";
import GamePage from "./pages/GamePage.vue";
import { ref } from "vue";
export default {
  name: "App",
  components: {
    GamePage,
    StartPage,
  },
  setup() {
    const currentPage = ref("GamePage");
    // const currentPage = ref("StartPage");
    const handleChangePage = (page) => {
      currentPage.value = page;
    };
    return {
      currentPage,
      handleChangePage,
    };
  },
};
</script>

<style></style>
