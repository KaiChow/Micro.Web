<template>
    <div>
      <h2>Profile Page</h2>
      <p>Current User: {{ globalState.userInfo.name }}</p>
      <button @click="updateGlobalState">Update Global State</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        globalState: {},
      };
    },
    mounted() {
      this.$globalActions.onGlobalStateChange((state) => {
        this.globalState = state;
      });
    },
    methods: {
      updateGlobalState() {
        this.$globalActions.setGlobalState({
          ...this.globalState,
          userInfo: { name: "Jane Doe", role: "viewer" },
        });
      },
    },
  };
  </script>
  