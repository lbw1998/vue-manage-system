import Vue from "vue";
import VueRouter from "vue-router";
import routerList from "./setting";
Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

//routes.js

const Layout = () => import("@/layout");

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: Layout,
    meta: { requiresAuth: true },
    children: [...routerList]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue")
  }
];

const router = new VueRouter({
  // mode: "hash",
  mode: "history",
  // base: "/",
  routes
});

// 路由拦截
// router.beforeEach((to, form, next) => {
//   let token = localStorage.getItem("token");
//   if (token) {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//       next();
//     } else {
//       next({ path: "/home" });
//     }
//   } else {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//       next({ path: "/login" });
//     } else {
//       next();
//     }
//   }
// });

export default router;
