import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  { path: "/profile", component: () => import("./components/Profile.vue") },
  { path: "/settings", component: () => import("./components/Settings.vue") },
];

export default new Router({
  mode: "history",
  base: "/sub-app-2",
  routes,
});
