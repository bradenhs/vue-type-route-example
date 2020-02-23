<template>
  <div id="app">
    <Navigation />
    <Users v-if="route.name === 'users'" v-bind:route="route" />
    <Home v-else-if="route.name === 'home'" v-bind:route="route" />
    <div v-else>Not Found</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Users from "./components/Users.vue";
import Navigation from "./components/Navigation.vue";
import Home from "./components/Home.vue";
import { listen, getCurrentRoute } from "./router";

export default Vue.extend({
  name: "App",
  components: {
    Users,
    Navigation,
    Home
  },
  data() {
    return {
      route: getCurrentRoute()
    };
  },
  mounted() {
    listen(nextRoute => {
      this.route = nextRoute;
    });
  }
});
</script>
