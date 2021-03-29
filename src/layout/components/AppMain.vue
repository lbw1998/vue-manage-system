<template>
  <div class="app-wrapper">
    <Bread></Bread>
    <div class="main-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import Bread from "@/components/Breadcrumb.vue";

export default {
  components: {
    Bread
  }
};
</script>
<style lang="scss" scoped>
.main-wrapper {
  padding: 60px 20px 20px;
}
</style>
