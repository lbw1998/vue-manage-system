# vue-manage-system

## 项目介绍
```
在Vue2.0中根据目录结构自动化搭建系统路由、界面菜单、面包屑。
```

## 使用方法
```
1. 一级目录
  在views文件夹中建立file.vue文件，在script中添加属性，menuName属性表示菜单名称，icon属性表示菜单图标，sort属性表示菜单在这一级中的排序,该级目录路由为/file。
2.多级目录
  在views文件夹中建立test文件夹，在test文件夹中建立index.vue(必须)，在index.vue中添加<router-view></router-view>，在script中添加属性，menuName属性表示菜单名称，icon属性表示菜单图标，sort属性表示菜单在这一级中的排序，将该文件夹中建立second.vue文件，在script中添加属性，该级目录路由为/test/second。
  ps: 删除文件目录需要重启服务。
```

## 本地测试
```
npm run dev
```
