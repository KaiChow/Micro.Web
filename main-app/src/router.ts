import { createRouter, createWebHistory } from 'vue-router';
import MicroAppContainer from './components/MicroAppContainer.vue';

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: () => import('./components/Home.vue') },
  { path: '/sub-app-vue3/:pathMatch(.*)*', component: MicroAppContainer },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
