/** @format */

import axios from "axios";
import qs from "qs";
import { handleResponseErrors } from "./utils";
// import router from "../router";
// import { Message } from "element-ui";

const service = axios.create({
  timeout: 5000,
  baseURL: "/api"
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  // 请求成功
  res => {
    if (res.status === 200) {
      if (res.data.code === 403) {
        // router.push({ path: "/login" });
      }
      // if (res.data.code !== 0) {
      //   Message.error(res.data.msg);
      // }
      return Promise.resolve(res.data);
    } else {
      return Promise.reject(res);
    }
  },
  // 请求失败
  error => {
    const { response } = error;
    if (response) {
      // 请求已发出，但是不在200的范围
      handleResponseErrors(response.status, response.data.msg);
      return Promise.reject(response);
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      // store.commit('changeNetwork', false);
    }
  }
);

function ajaxRequest(method, url, type, params, token = false) {
  let contentType = [
    "application/x-www-form-urlencoded",
    "application/json",
    "multipart/form-data;charset=UTF-8"
  ];
  let headers = { "content-type": contentType[type] };

  if (token === true)
    headers["Authorization"] = "Bearer " + localStorage.getItem("token");

  if (type === 0) params = qs.stringify(params);
  let axiosOptions = { method, url, headers };
  if (method.toUpperCase() === "GET") {
    axiosOptions["params"] = params;
  } else {
    axiosOptions["data"] = params;
  }
  return service(axiosOptions);
}

function download(method, url, type, params) {
  let contentType = [
    "application/x-www-form-urlencoded",
    "application/json",
    "multipart/form-data;charset=UTF-8"
  ];
  let headers = { "content-type": contentType[type] };
  if (type === 0) params = qs.stringify(params);
  let axiosOptions = { method, url, headers };
  if (method.toUpperCase() === "GET") {
    axiosOptions["params"] = params;
  } else {
    axiosOptions["data"] = params;
  }
  axiosOptions.responseType = "blob";
  return service(axiosOptions);
}
export { ajaxRequest, download };
