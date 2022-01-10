<template>
  <el-submenu
    v-if="menu.children && menu.children.length"
    :key="menu.path"
    :index="menu.path"
  >
    <template slot="title">
      <i :class="menu.icon"></i>
      <span slot="title">{{ menu.title }}</span>
    </template>
    <sub-menu
      v-for="item in menu.children"
      :key="item.path"
      :menu="item"
    ></sub-menu>
  </el-submenu>
  <el-menu-item v-else :index="menu.path" :key="menu.path">
    <i :class="menu.icon"></i>
    <span slot="title">{{ menu.title }}</span>
  </el-menu-item>
</template>

<script>
export default {
  name: "SubMenu",
  props: {
    menu: {
      type: Object || {}
    }
  }
};
</script>
