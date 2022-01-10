import store from "../store";
//递归获取 views 文件夹下的所有.vue文件
const files = require.context(
  "@/views",
  true,
  /^((?!index\.vue).)*\.vue((?!index\.vue).)*$/
);
const fileIndexs = require.context("@/views", true, /index\.vue$/);

let pages = {};
let pageIndexs = {};
// 最多有几级目录
let level = 1;
files.keys().forEach(key => {
  pages[key.replace(/(\.\/|\.vue)/g, "")] = files(key).default;
});

// 所有的index.vue
fileIndexs.keys().forEach(key => {
  pageIndexs[key.replace(/(\.\/|\.vue)/g, "")] = fileIndexs(key).default;
});

//生成路由规则
let routerList = [];
// let menuList = [];
// 路由黑名单
const blackList = ["login", "components"];
let maps = {};
// 先构建父路由节点
for (const key in pageIndexs) {
  if (blackList.some(item => key.toLowerCase().includes(item))) {
    continue;
  } else {
    const menuName = pageIndexs[key].menuName;
    const path = pageIndexs[key].__file.slice(10, -10);
    const routerArr = path.split("/");
    if (routerArr.length > 1) {
      routerArr.length > level && (level = routerArr.length);
      maps[routerArr[routerArr.length - 1]] = {
        parent: routerArr[routerArr.length - 2],
        level: routerArr.length,
        sort: pageIndexs[key].sort || 999,
        icon: pageIndexs[key].icon,
        title: menuName,
        path: "/" + path.toLowerCase(),
        meta: { title: menuName },
        component: () => import(`@/views/${path}/index.vue`),
        children: []
      };
    } else {
      maps[routerArr[0]] = {
        path: "/" + path.toLowerCase(),
        level: routerArr.length,
        sort: pageIndexs[key].sort || 999,
        icon: pageIndexs[key].icon,
        title: menuName,
        meta: { title: menuName },
        component: () => import(`@/views/${path}/index.vue`),
        children: []
      };
    }
  }
}

// 构建子节点
for (const key in pages) {
  if (blackList.some(item => key.toLowerCase().includes(item))) {
    continue;
  } else {
    const menuName = pages[key].menuName;
    const path = pages[key].__file.slice(10, -4);
    const routerArr = path.split("/");
    if (routerArr.length > 1) {
      maps[routerArr[routerArr.length - 2]].children.push({
        path: "/" + path.toLowerCase(),
        level: routerArr.length,
        sort: pages[key].sort || 999,
        icon: pages[key].icon,
        title: menuName,
        meta: { title: menuName },
        component: () => import(`@/views/${path}.vue`)
      });
    } else {
      maps[routerArr[routerArr.length - 1]] = {
        path: "/" + path.toLowerCase(),
        sort: pages[key].sort || 999,
        icon: pages[key].icon,
        title: menuName,
        meta: { title: menuName },
        component: () => import(`@/views/${path}.vue`),
        children: []
      };
    }
  }
}

for (const key in maps) {
  if (maps[key].children?.length > 0) {
    maps[key].children = quickSort(maps[key].children);
  }
}
while (level != 1) {
  for (const key in maps) {
    if (maps[key].level == level && maps[key].parent) {
      delete maps[key].level;
      maps[maps[key].parent].children.push(maps[key]);
      delete maps[key];
    }
  }
  level--;
}
for (const key in maps) {
  routerList.push(maps[key]);
}
routerList = quickSort(routerList);

function quickSort(arr) {
  // 如果数组<=1 直接返回
  if (arr.length <= 1) return arr;
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
  // 定义左右数组
  let left = [];
  let right = [];
  // 比基准小的放left，大的放right
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].sort <= pivot.sort) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

store.dispatch("setMenu", routerList);

export default routerList;
