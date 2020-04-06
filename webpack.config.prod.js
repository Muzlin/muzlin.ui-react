// 引入webpack基础配置
const base = require('./webpack.config')
module.exports = Object.assign({
  mode: 'production', // 发布模式
  // 排除外部库 不打包
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'rect',
      amd: 'react',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'rect-dom',
      amd: 'react-dom',
      root: 'React-dom'
    }
  }
}, base)
