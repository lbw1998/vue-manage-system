<template>
  <div class="sidebar">
    <el-menu
      :collapse="isCollapse"
      :unique-opened="true"
      :default-active="$route.path"
      background-color="rgba(48, 65, 85, 1)"
      text-color="#fff"
      active-text-color="rgb(64, 158, 255)"
      router
    >
      <template v-for="item in menuList">
        <el-submenu v-if="item.children" :key="item.path" :index="item.path">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="items in item.children"
              :key="items.path"
              :index="items.path"
            >
              <i :class="items.icon"></i>
              {{ items.title }}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item v-else :index="item.path" :key="item.path">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["menuList", "isCollapse"])
  }
};
</script>
<style lang="scss" scoped>
.sidebar {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .el-menu {
    width: 100%;
    height: 100%;
  }
  .el-menu:not(.el-menu--collapse) {
    width: 250px;
    min-height: 400px;
  }
}
</style>
