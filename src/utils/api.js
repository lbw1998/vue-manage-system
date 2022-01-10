import { request } from "./axios.config.js";

// 1.人员认证
const LOGIN_API = {
  login: params =>
    request("get", `/monitor/attestation/listAll`, 1, params, false)
};
const USER_API = {
  getUserInfo: params => request("get", `/user/userInfo`, 1, params, false)
};

export { LOGIN_API, USER_API };
