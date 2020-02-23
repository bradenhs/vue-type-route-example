<template>
  <div>Users {{ route.params.page }}</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Route } from "type-route";
import { routes } from "../router";

export default Vue.extend({
  name: "Users",
  props: {
    route: Object as () => Route<typeof routes.users>
  },
  mounted() {
    console.log(this.route.params.page);
  }
});
</script>
