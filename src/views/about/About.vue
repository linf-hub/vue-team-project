<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loginMsg: this.$store.state.loginMsg
      }
    },
    methods: {

    },
    mounted() {
      console.log(this.loginMsg);
    }
  }
</script>
