import { createRouter, defineRoute } from "type-route";

export const { routes, getCurrentRoute, listen } = createRouter({
  home: defineRoute("/home"),
  users: defineRoute({ page: "query.param.number.optional" }, () => "/users")
});
