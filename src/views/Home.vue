<template>
  <div class="home">
    <LandingPage msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from "@/components/LandingPage.vue";

export default {
  name: "Home",
  components: {
    LandingPage
  }
};
</script>
