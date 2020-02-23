<template>
  <nav>
    <a href="homeLink.href" v-on:click="homeLink.onClick">Home</a>
    <a href="usersLink.href" v-on:click="usersLink.onClick">About</a>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import { routes } from "../router";

export default Vue.extend({
  name: "Navigation",
  computed: {
    homeLink: () => routes.home.link(),
    usersLink: () => routes.users.link({ page: 1 })
  }
});
</script>
