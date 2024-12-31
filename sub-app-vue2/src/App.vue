<template>
    <div id="app">
      <h1>Sub App (Vue 2)</h1>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      // 监听全局状态变化
      if (this.$globalActions) {
        this.$globalActions.onGlobalStateChange((state, prev) => {
          console.log("[sub-app-vue2] Global State changed:", state, prev);
        });
      }
    },
  };
  </script>
  