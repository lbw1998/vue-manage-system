<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <template v-for="(item, index) in matchList">
        <el-breadcrumb-item v-if="index > 0" :key="index">
          {{ item.meta.title }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  computed: {
    matchList() {
      return this.$route.matched;
    }
  }
};
</script>

<style lang="scss" scoped>
.breadcrumb {
  position: relative;
  .el-breadcrumb {
    width: 100%;
    height: 40px;
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    border-bottom: 1px solid rgba(220, 223, 230, 1);
    display: flex;
    align-items: center;
    padding-left: 20px;
    position: fixed;
  }
}
</style>
