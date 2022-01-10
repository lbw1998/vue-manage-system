<template>
  <div class="navbar">
    <div class="logo-wrap">
      <div class="title">身份标识管理系统</div>
      <div class="collapse" @click="changeCollapse()">
        <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
      </div>
    </div>
    <div class="user">
      <div class="sign-out">
        <span @click="logout">退出</span>
      </div>
      <div class="username">
        <span>{{ name }}</span>
      </div>
      <div class="avatar">
        <el-avatar :size="32"></el-avatar>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      name: "管理员"
    };
  },
  computed: {
    ...mapGetters(["isCollapse"])
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$message.success("退出成功");
      this.$router.push("/login");
    },
    changeCollapse() {
      this.$store.dispatch("changeCollapse");
    }
  }
};
</script>
<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 60px;
  padding-right: 20px;
  box-sizing: border-box;
  background-size: 100% 100%;
  box-shadow: 0 2px 2px 0 #efefef;
  display: flex;
  align-items: center;
  background-color: rgb(48, 65, 85);
  justify-content: space-between;
  .logo-wrap {
    display: flex;
    height: 100%;
  }
  .title {
    display: flex;
    width: 250px;
    height: 100%;
    box-sizing: border-box;
    align-items: center;
    font-family: "Arial Normal", "Arial", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 24px;
    color: #ffffff;
    letter-spacing: 2.3px;
    .logo {
      display: inline-block;
      height: 40px;
      margin-right: 10px;
    }
  }
  .collapse {
    width: 50px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #efefef;
    font-size: 18px;
    cursor: pointer;
  }
  .user {
    max-width: 600px;
    height: 60px;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    text-align: right;
    .avatar {
      cursor: pointer;
    }
    .username {
      display: inline-block;
      margin: 0 16px 0 8px;
      color: #ffffff;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    .sign-out {
      color: #1890ff;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .el-dialog {
    .tip {
      color: #8c939d;
      text-align: center;
      padding: 5px;
    }
  }
}

// 饿了么UI样式修改
.navbar ::v-deep .el-dialog {
  height: unset;
  .avatar-uploader {
    text-align: center;
    .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      &:hover {
        border-color: #409eff;
      }
    }
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>
