import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import qiankun from 'vite-plugin-qiankun';

export default defineConfig({
  plugins: [
    vue(),
    qiankun('sub-app-vue3', {
      useDevMode: true, // 开发模式下开启热更新支持
    }),
  ],
  server: {
    port: 7101,
    cors: true,
    origin: 'http://localhost:7101',
  },
});
