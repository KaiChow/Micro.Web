import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import globalRegister from "./store-register";
import store from "./store";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

let app = null;

function render(props = {}) {
  const { container } = props;
  app = createApp(App);
  app.use(router);
  app.use(store);
  app.mount(container ? container.querySelector("#app") : "#app");
}

renderWithQiankun({
  bootstrap() {
    console.log("Vue3 sub-app bootstraped");
  },
  mount(props) {
    console.log("Vue3 sub-app mounted");
    globalRegister(store, props);
    render(props);
  },
  unmount() {
    console.log("Vue3 sub-app unmounted");

    app.unmount();
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  // 这里是子应用独立运行的环境，实现子应用的登录逻辑

  // 独立运行时，也注册一个名为global的store module
  globalRegister(store);
  // 模拟登录后，存储用户信息到global module
  const userInfo = { name: "我是独立运行时名字叫张三" }; // 假设登录后取到的用户信息
  store.commit("global/setGlobalState", { user: userInfo });
  render();
}
