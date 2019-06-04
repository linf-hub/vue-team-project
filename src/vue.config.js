module.exports = {
  devServer: {
    // 设置代理
    proxy: {
      "/cms": {
        target: "http://http://localhost:8080/", // 访问数据的计算机域名
        ws: false, // 是否启用websockets
        changOrigin: true //开启代理
      }
    }
  }
}