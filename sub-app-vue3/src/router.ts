import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/dashboard', component: () => import('./components/Dashboard.vue') },
  { path: '/profile', component: () => import('./components/Profile.vue') },
];

const router = createRouter({
  history: createWebHistory('/sub-app-vue3'), // 子应用的路由基础路径
  routes,
});

export default router;
