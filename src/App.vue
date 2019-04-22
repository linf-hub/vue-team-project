<template>
  <div id="app">
    <div id="nav">
      <button @click="login">login</button>
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>
import aboutRoute from './router/about.js'
export default {
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAlive: true,
      loginMsg: {
        username: "",
        password: "",
        token: ""
      }
    };
  },
  methods: {
    // 用于刷新
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    },
    login() {
      this.loginMsg = {
        username: "abc",
        password: "def",
        token: "ghi"
      };
      this.$store.commit("SET_LOGINMSG", this.loginMsg);
      this.$router.addRoutes(aboutRoute)

    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
