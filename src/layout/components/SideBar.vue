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
      <sub-menu v-for="item in menuList" :key="item.path" :menu="item" />
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {
    SubMenu: () => import("@/components/SubMenu")
  },
  data() {
    return {
      navList: [
        {
          title: "工作台",
          icon: "el-icon-menu",
          index: "/el-icon-menu"
        },
        {
          title: "用户管理",
          icon: "fa   fa-crosshairs custom-side-icon",
          // index: "/home"
          children: [
            {
              title: "用户信息维护",
              icon: "fa   fa-crosshairs custom-side-icon",
              index: "/home"
            }
          ]
        },
        {
          title: "身份管理",
          icon: "fa   fa-crosshairs custom-side-icon",
          children: [
            {
              title: "用户账号管理",
              icon: "fa   fa-crosshairs custom-side-icon",
              index: "/home"
            },
            {
              title: "用户证书管理",
              icon: "fa   fa-crosshairs custom-side-icon",
              index: "/home"
            },
            {
              title: "身份令牌管理",
              icon: "fa   fa-crosshairs custom-side-icon",
              index: "/home"
            },
            {
              title: "标识牌管理",
              icon: "fa   fa-crosshairs custom-side-icon",
              index: "/home"
            }
          ]
        },
        {
          title: "审核管理",
          icon: "fa   fa-crosshairs custom-side-icon",
          children: [
            {
              title: "自主用户审核",
              icon: "fa   fa-crosshairs custom-side-icon",
              index: "/home"
            },
            {
              title: "用户同步审核",
              icon: "fa   fa-crosshairs custom-side-icon",
              index: "/home"
            },
            {
              title: "用户审核历史",
              icon: "fa   fa-crosshairs custom-side-icon",
              index: "/home"
            },
            {
              title: "终端注册审核",
              icon: "fa   fa-crosshairs custom-side-icon",
              index: "/home"
            },
            {
              title: "终端审核历史",
              icon: "fa   fa-crosshairs custom-side-icon",
              index: "/home"
            }
          ]
        },
        {
          title: "认证管理",
          icon: "fa   fa-crosshairs custom-side-icon",
          children: [
            {
              title: "应用认证管理",
              icon: "fa   fa-crosshairs custom-side-icon",
              index: "/home"
            },
            {
              title: "终端认证管理",
              icon: "fa   fa-crosshairs custom-side-icon",
              index: "/home"
            },
            {
              title: "人员群组维护",
              icon: "fa   fa-crosshairs custom-side-icon",
              index: "/home"
            },
            {
              title: "终端群组维护",
              icon: "fa   fa-crosshairs custom-side-icon",
              index: "/home"
            }
          ]
        },
        {
          title: "级联管理",
          icon: "fa   fa-crosshairs custom-side-icon",
          children: [
            {
              title: "级联部署配置",
              icon: "fa   fa-crosshairs custom-side-icon",
              index: "/home"
            },
            {
              title: "数据同步维护",
              icon: "fa   fa-crosshairs custom-side-icon",
              index: "/home"
            },
            {
              title: "数据同步历史",
              icon: "fa   fa-crosshairs custom-side-icon",
              index: "/home"
            }
          ]
        },
        {
          title: "审计管理",
          icon: "fa   fa-crosshairs custom-side-icon",
          children: [
            {
              title: "业务日志审计",
              icon: "fa   fa-crosshairs custom-side-icon",
              index: "/home"
            },
            {
              title: "系统日志审计",
              icon: "fa   fa-crosshairs custom-side-icon",
              index: "/home"
            }
          ]
        },
        {
          title: "配置管理",
          icon: "fa   fa-crosshairs custom-side-icon",
          children: [
            {
              title: "系统访问控制",
              icon: "fa   fa-crosshairs custom-side-icon",
              index: "/home"
            },
            {
              title: "组织机构管理",
              icon: "fa   fa-crosshairs custom-side-icon",
              index: "/home"
            },
            {
              title: "系统用户管理",
              icon: "fa   fa-crosshairs custom-side-icon",
              index: "/home"
            },
            {
              title: "系统字典管理",
              icon: "fa   fa-crosshairs custom-side-icon",
              index: "/home"
            },
            {
              title: "业务配置管理",
              icon: "fa   fa-crosshairs custom-side-icon",
              index: "/home"
            },
            {
              title: "代理软件管理",
              icon: "fa   fa-crosshairs custom-side-icon",
              index: "/home"
            }
          ]
        }
      ]
    };
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
