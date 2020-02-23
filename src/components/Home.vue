<template>
  <div>Home {{ route }}</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Route } from "type-route";
import { routes } from "../router";

export default Vue.extend({
  name: "Home",
  props: {
    route: Object as () => Route<typeof routes.home>
  }
});
</script>
