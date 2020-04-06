// 引入webpack基础配置
const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = Object.assign({
  mode: 'development', // 开发模式
  plugins: [
    new HtmlWebpackPlugin({
      title: 'muzlin.ui',
      template: 'index.html'
    })
  ]
}, base)
