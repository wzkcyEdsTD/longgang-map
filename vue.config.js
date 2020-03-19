module.exports={
    publicPath: "./",
    assetsDir: "libs",
    // rules: [
    //     {
    //         test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    //         loader: 'url-loader',
    //         options: {
    //             limit: 10000,
    //             name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
    //         }
    //     }
    // ],
    configureWebpack: (config) => {
        config.module.rules.push({
          // 处理字体
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          use: [{
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
          }]
        })
      }
}