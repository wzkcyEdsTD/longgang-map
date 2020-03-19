module.exports={
    publicPath: "./",
    assetsDir: "libs",
    configureWebpack: (config) => {
        config.module.rules.push({
          // 处理字体
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          use: [{
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'resourse/[name].[hash:7].[ext]'
            }
          }]
        })
      }
}