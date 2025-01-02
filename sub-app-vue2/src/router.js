const routes = [
  { path: "/", redirect: "/profile" },
  { path: "/profile", component: () => import("./components/Profile.vue") },
  { path: "/settings", component: () => import("./components/Settings.vue") },
];

export default routes