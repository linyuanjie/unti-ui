module.exports = {
  devServer: {
    open: true, //打开默认浏览器
    host: "localhost",
    // host: "10.112.56.243",
    port: 8080,
    https: false, //忽略https
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: {
      //配置跨域
      "/api": {
        target: "http:127.0.0.1:5000",
        ws: false, //代理websocket
        secure: false, //忽略https
        changOrigin: true, //允许跨域
        pathRewrite: {
          "^/api": "", //请求的时候使用这个api就可以
        },
        cookieDomainRewrite: "mcenter.me.cbus", //修改cookie的host作用域
      },
    },
  },
  publicPath : './',
  runtimeCompiler: true,
};
