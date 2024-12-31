import { createApp } from 'vue';
import App from './App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import router from './router';
import store from './store'
import { registerMicroApps, start, initGlobalState } from 'qiankun';

const app = createApp(App);
app.use(Antd).use(router);

// 初始化全局状态
const actions = initGlobalState({
  menu: [],
});

// 注册子应用
registerMicroApps([
  {
    name: 'sub-app-vue3',
    entry: '//localhost:7101',
    container: '#subapp-viewport',
    activeRule: '/sub-app-vue3',
    props: {
      getGlobalState: store.getGlobalState // 下发getGlobalState方法
    }
  },
  {
    name: "sub-app-2",
    entry: "//localhost:7102",
    container: "#subapp-viewport",
    activeRule: "/sub-app-2",
    props: { globalActions: store.getGlobalState },
  },
],{
  fetch: async (url: RequestInfo | URL) => {
    // 自定义 fetch 方法，解决跨域或格式问题
    const response = await fetch(url);
    return response.text();
  },
});

start({
  sandbox: {
    strictStyleIsolation: true, // 启用样式隔离
  },
});

app.config.globalProperties.$actions = actions;
app.mount('#app');
