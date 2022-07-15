const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  runtimeCompiler: true,
  devServer: {
    proxy: {
      '/api': {
        // 目标地址
        target: 'http://192.168.8.28:8088',
        ws: true,
        // 设置允许跨域
        changeOrigin: true,
        pathRewrite: {
          //把访问路径中的/api替换掉
          '^/api': ''
        }
      }
    }
  },
  // 配置主题色, 需要安装6+版本less-loader@6.2.0
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            // 'primary-color': '#de7960', // 橙色
            'primary-color': '#1890ff', // 橙色
          },
          javascriptEnabled: true,
        }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@src', path.resolve(__dirname, './src'))
      .set('@assets', path.resolve(__dirname, './src/assets'))
      .set('@views', path.resolve(__dirname, './src/views'))
      .set('@components', path.resolve(__dirname, './src/components'))
      .set('@api', path.resolve(__dirname, './src/utils/api'))
  }
})
