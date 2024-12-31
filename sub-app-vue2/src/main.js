import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { qiankunWindow } from "qiankun";

let instance = null;

function render(props = {}) {
  const { container, globalActions } = props;

  // 挂载全局状态到 Vue 原型
  if (globalActions) {
    Vue.prototype.$globalActions = globalActions;
  }

  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app");
}

// 如果是独立运行，直接渲染应用
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}

// 导出 qiankun 生命周期钩子
export async function bootstrap() {
  console.log("[sub-app-vue2] bootstraped");
}

export async function mount(props) {
  console.log("[sub-app-vue2] mounted", props);
  render(props);
}

export async function unmount() {
  console.log("[sub-app-vue2] unmounted");
  if (instance) {
    instance.$destroy();
    instance.$el.innerHTML = "";
    instance = null;
  }
}
