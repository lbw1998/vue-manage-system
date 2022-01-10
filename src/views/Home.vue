<template>
  <div class="home-wrap">
    主页
    <p>我叫 {{ name }}</p>
    change事件：<el-input @change.once="showMessage" v-model="name"></el-input>
    失去焦点事件：<el-input @blur="showMessage" v-model="text"></el-input>
    键盘输入事件：
    <el-input @keyup.enter.native="showMessage" v-model="text"></el-input>
    <el-button @click="showMessage">点击事件</el-button>
  </div>
</template>

<script>
import { USER_API } from "../utils/api";

export default {
  name: "home",
  menuName: "控制台",
  icon: "el-icon-info",
  sort: 1,
  data() {
    return {
      name: "张二蛋",
      text: ""
    };
  },
  methods: {
    showMessage() {
      alert("展示信息");
    }
  },
  created() {
    USER_API.getUserInfo().then(res => {
      if (res.code === 0) {
        this.name = res.data.username;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.home-wrap {
}
</style>
