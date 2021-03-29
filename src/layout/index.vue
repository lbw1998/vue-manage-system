<template>
  <div class="app-wrapper">
    <el-container>
      <el-header>
        <nav-bar></nav-bar>
      </el-header>
      <el-container>
        <el-aside class="aside">
          <side-bar></side-bar>
        </el-aside>

        <el-main>
          <app-main></app-main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { AppMain, NavBar, SideBar } from "./components";

export default {
  name: "Layout",
  components: {
    AppMain,
    NavBar,
    SideBar
  },
  data() {
    return {
      // isCollapse: false
    };
  }
};
</script>
<style lang="scss" scoped>
.app-wrapper {
  width: 100%;
  height: 100%;
  .el-container {
    width: 100%;
    height: 100%;
    .el-main {
      padding: 0;
      background-color: rgba(235, 240, 245, 1);
    }
  }
  .el-header {
    padding: 0;
  }
  .aside {
    overflow: hidden;
    position: relative;
    width: auto !important;
  }
}
</style>
