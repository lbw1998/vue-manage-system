import Mock from "mockjs";
Mock.mock("/api/user/userInfo", "get", require("./json/userInfo"));
