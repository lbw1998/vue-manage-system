import { Message } from "element-ui";
import router from "@/router/index";

/**
 * message提示框
 * @param {String} message 提示文字
 * @param {Boolean} type 提示类型
 * @param {Number} duration 显示时间
 * @param {Boolean} showClose 是否显示关闭按钮
 */
const showMsg = (
  message,
  type = "success",
  duration = 2000,
  showClose = false
) => {
  Message({
    message,
    type,
    duration,
    showClose
  });
};

/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
  router.replace({
    path: "/",
    query: {
      redirect: router.currentRoute.fullPath
    }
  });
};

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 * @param {String} msg 请求失败的返回信息
 */
const handleResponseErrors = (status, msg) => {
  switch (status) {
    case 401:
      // showMsg('登录过期，请重新登录', 'error');
      // 清除token
      localStorage.clear();
      // toLogin();
      this.$router.push({ path: "/login" });
      break;
    case 404:
      showMsg("网络请求不存在", "error");
      break;
    case 500:
      showMsg("系统错误,请联系管理员", "error");
      break;
    default:
      showMsg(msg, "error");
  }
};

export { showMsg, toLogin, handleResponseErrors };
