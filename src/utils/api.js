import { ajaxRequest } from "./axios.config.js";

// 1.人员认证
const LOGIN_API = {
  login: params =>
    ajaxRequest("get", `/monitor/attestation/listAll`, 1, params, false)
};
const USER_API = {
  getUserInfo: params => ajaxRequest("get", `/user/userInfo`, 1, params, false)
};

export { LOGIN_API, USER_API };
