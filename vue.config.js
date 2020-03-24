// var utils = require ('./utils.js')

module.exports={
    publicPath: "./",
    assetsDir: "libs",
    devServer:{
        port:8080,
		https:false,
		open:false,
        proxy: { 
            '/api': {  
              target: 'http://127.0.0.1:5000',  // http://127.0.0.1:5000/api/appconfig/format
              changeOrigin: true, 
              pathRewrite: { 
                '^/api': '/api'
                } 
            } 
          }
    }

}


/**
 * 原有的接口有跨域问题 后来我改为node服务器拿到数据，用proxy代理到node服务器，
 * 结果一直报404，
 * 最后查明原因，每次配置完vue.config.js都要重启项目
 * 
 */