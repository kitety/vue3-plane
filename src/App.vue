<template>
  <container>
    <StartPage
      v-if="currentPage === 'StartPage'"
      @change-page="handleChangePage"
    />
    <GamePage
      v-else-if="currentPage === 'GamePage'"
      @change-page="handleChangePage"
    />
    <EndPage
      v-else-if="currentPage === 'EndPage'"
      @change-page="handleChangePage"
    />
  </container>
</template>

<script>
import EndPage from "./pages/EndPage.vue";
import StartPage from "./pages/StartPage.vue";
import GamePage from "./pages/GamePage.vue";
import { ref } from "vue";
export default {
  name: "App",
  components: {
    GamePage,
    StartPage,
    EndPage,
  },
  setup() {
    const currentPage = ref("StartPage");
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
