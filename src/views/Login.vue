<template>
  <div class="login-wrap">登录页</div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      // let params = this.form;
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
}
</style>
