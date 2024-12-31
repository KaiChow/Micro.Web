<template>
  <div class="layout-main">
    <menu-component />
    <!-- 子应用会加载到这个容器中 -->
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import MenuComponent from "./components/MenuComponent.vue";
</script>

<style scoped>
.layout-main {
  display: flex;
  main {
    position: fixed;
    left: 200px;
    width: 100%;
  }
}
</style>
