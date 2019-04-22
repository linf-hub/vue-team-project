<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="text" name="" v-model="inputMsg">
    <button @click="reloads">刷新</button>
  </div>
</template>

<script>
  export default {
    inject: ['reload'],
    data() {
      return {
        loginMsg: this.$store.state.loginMsg,
        inputMsg: ""
      }
    },
    methods: {
      reloads() {
        this.reload()
      }
    },
    mounted() {
      console.log(this.loginMsg);
    }
  }
</script>
