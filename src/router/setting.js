import store from "../store";
//递归获取 views 文件夹下的所有.vue文件
const files = require.context("@/views", true, /\.vue$/);
let pages = {};
files.keys().forEach(key => {
  pages[key.replace(/(\.\/|\.vue)/g, "")] = files(key).default;
});

//生成路由规则
let routerList = [];
let menuList = [];
// 路由白名单
const blackList = ["login", "components"];
let maps = {};

for (const key in pages) {
  // 判断是否在黑名单内
  if (blackList.some(item => key.toLowerCase().includes(item))) {
    continue;
  } else {
    let viewName = key.split("/");
    let menuName = pages[key].menuName;
    // 是否为多级目录;
    if (viewName.length > 1) {
      let index = maps[viewName[0]];
      // 如果已经存在一级目录
      if (index !== undefined) {
        // 如果是index
        if (viewName[1] == "index") {
          routerList[index].meta.title = menuName;
          menuList[index].title = menuName;
          menuList[index].icon = pages[key].icon;
          menuList[index].level = pages[key].level;
        } else {
          routerList[index].children.push({
            path: `/${key.toLowerCase()}`,
            meta: { title: menuName },
            name: pages[key].name,
            component: () => import(`@/views/${key}.vue`)
          });
          menuList[index].children.push({
            path: `/${key.toLowerCase()}`,
            icon: pages[key].icon,
            level: pages[key].level,
            title: menuName
          });
        }
      } else {
        // 不存在一级目录
        maps[viewName[0]] = routerList.length;
        if (viewName[1] == "index") {
          routerList.push({
            meta: { title: menuName },
            path: `/${viewName[0].toLowerCase()}`,
            component: () => import(`@/views/${viewName[0]}/index.vue`),
            children: []
          });
          menuList.push({
            path: `/${key.toLowerCase()}`,
            title: menuName,
            icon: pages[key].icon,
            level: pages[key].level,
            children: []
          });
        } else {
          routerList.push({
            meta: { title: "" },
            path: `/${viewName[0].toLowerCase()}`,
            component: () => import(`@/views/${viewName[0]}/index.vue`),
            children: [
              {
                path: `/${key.toLowerCase()}`,
                name: pages[key].name,
                meta: { title: menuName },
                component: () => import(`@/views/${key}.vue`)
              }
            ]
          });
          menuList.push({
            path: `/${viewName[0].toLowerCase()}`,
            title: "",
            children: [
              {
                path: `/${key.toLowerCase()}`,
                icon: pages[key].icon,
                level: pages[key].level,
                title: menuName
              }
            ]
          });
        }
      }
    } else {
      routerList.push({
        path: `/${key.toLowerCase()}`,
        name: pages[key].name,
        meta: { title: menuName },
        component: () => import(`@/views/${key}.vue`)
      });
      menuList.push({
        path: `/${key.toLowerCase()}`,
        icon: pages[key].icon,
        level: pages[key].level,
        title: menuName
      });
    }
  }
}
sortMenu(menuList);
store.dispatch("setMenu", menuList);

function sortMenu(list) {
  // 带level的
  let list1 = [];
  // 不带level的
  let list2 = [];
  list.forEach(item => {
    if (item.level) {
      if (item.children) {
        sortMenu(item.children);
      }
      // 如果list1为空
      if (!list1.length) {
        list1.push(item);
      } else {
        for (let i = 0; i < list1.length; i++) {
          if (item.level >= list1[list1.length - 1].level) {
            list1.push(item);
            return;
          }
          if (item.level < list1[i].level) {
            list1.splice(i, 0, item);
            return;
          }
        }
      }
    } else {
      list2.push(item);
    }
  });
  let newList = [...list1, ...list2];
  for (let i = 0; i < newList.length; i++) {
    list[i] = newList[i];
  }
}
export default routerList;
