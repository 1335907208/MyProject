module.exports = {
  devServer: {
    port: 1773,
    proxy: {
      '/api': {
        //本地服务接口地址
        // target: 'http://localhost:30080',
         target: 'http://qcdm.demo.hzkychina.com:30080',
        // target:'http://203.125.12.205:8280/api',
        // target:'http://203.125.12.205:31080/api',
        //远程演示服务地址,可用于直接启动项目
        //target: 'https://saber.bladex.vip/api',
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
