<template>
  <a-menu mode="inline" :items="menuItems" @click="onMenuClick" style="width: 200px; height: 100vh; position: fixed;">
  </a-menu>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { key: 'home', label: 'Home', path: '/home' },
        { key: 'sub-app-vue3-dashboard', label: 'Sub App Vue3 - Dashboard', path: '/sub-app-vue3/dashboard' },
        { key: 'sub-app-vue3-profile', label: 'Sub App Vue3 - Profile', path: '/sub-app-vue3/profile' },
        { key: 'sub-app-vue2-profile', label: 'Sub App Vue2 - Profile', path: '/sub-app-vue2/profile' },
        { key: 'sub-app-vue2-Settings', label: 'Sub App Vue3 - Settings', path: '/sub-app-vue2/settings' },
      ],
    };
  },
  methods: {
    onMenuClick({ key }) {
      const menu = this.menuItems.find((item) => item.key === key);
      if (menu) {
        this.$router.push(menu.path);
      }
    },
  },
};
</script>
