/** @format */

module.exports = {
  publicPath: "/",
  // webpack-dev-server 相关配置
  devServer: {
    port: 8080, // 端口
    host: "0.0.0.0", // 允许外部ip访问
    open: true,
    proxy: {
      // 服务端
      "/api": {
        target: "http://192.40.10.198:8090", //连接服务器
        changeOrigin: true, // 允许websockets跨域
        // ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    } // 代理转发配置，用于调试环境
  },
  productionSourceMap: false,
  // 第三方插件配置
  pluginOptions: {},
  // vue-echarts
  transpileDependencies: ["vue-echarts", "resize-detector"]
  // build: {
  //   assetsPublicPath: "./",
  //   productionSourceMap: false,
  // index: path.resolve(__dirname, "../dist/index.html"),
  // assetsRoot: path.resolve(__dirname, "../dist")
  // }
};
