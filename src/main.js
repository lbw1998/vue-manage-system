import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import ECharts from "vue-echarts";
import "echarts";
import "./mock";

Vue.use(ElementUI, { size: "mini", zIndex: 3000 });
Vue.use(router);
Vue.component("v-chart", ECharts);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
// router.VueRouter.prototype;

// const originalPush = router.prototype.push;
// router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err);
// };
