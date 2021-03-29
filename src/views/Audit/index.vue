<template>
  <div>
    这里是audit.vue
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "attestation",
  icon: "el-icon-info",
  menuName: "审批管理",
  level: 3,
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.attestation-wrap {
}
</style>
