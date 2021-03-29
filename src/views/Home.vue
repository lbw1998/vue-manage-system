<template>
  <div class="home-wrap">
    主页
    <p>我叫 {{ name }}</p>
  </div>
</template>

<script>
import { USER_API } from "../utils/api";

export default {
  name: "home",
  menuName: "控制台",
  icon: "el-icon-info",
  level: 1,
  data() {
    return {
      name: ""
    };
  },
  async created() {
    let res = await USER_API.getUserInfo();
    if (res.code === 0) {
      this.name = res.data.username;
    }
  }
};
</script>

<style lang="scss" scoped>
.home-wrap {
}
</style>
