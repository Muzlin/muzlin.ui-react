// 引入path模块
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'production', // 模式 开发、发布等
  // 入口
  entry: {
    index: './lib/index.tsx', // 入口的名字 index 值为具体路径
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  // 输出
  output: {
    path: path.resolve(__dirname, 'dist/lib'), // 输出路径 因为操作系统不一致 所有需要path来处理
    library: 'Muzlin', // 库的名字
    libraryTarget: 'umd' // 输出格式 (umd/commonjs/amd)
  },
  // 配置TSX(等)的解释方式
  module: {
    rules: [
      {
        test: /\.tsx?$/, // 根据正则匹配tsx/ts文件
        loader: 'awesome-typescript-loader' // 使用的loader
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'muzlin.ui',
      template: 'index.html'
    })
  ],
}
