const vue = require('@vitejs/plugin-vue')
/**
 * 由于 Vue CLI 3 不再使用传统的 webpack 配置文件，故 WebStorm 无法识别别名
 * 本文件对项目无任何作用，仅作为 WebStorm 识别别名用
 * 进入 WebStorm preferences -> Language & Framework -> JavaScript -> Webpack，选择这个文件即可
 * */
const resolve = dir => require('path').join(__dirname, dir)
module.exports = {
  resolve: {
    alias: {
      '@': resolve('src'),
      api: resolve('src/api'),
      components: resolve('src/components'),
      lang: resolve('src/lang'),
      mixins: resolve('src/mixins'),
      network: resolve('src/network'),
      router: resolve('src/router'),
      store: resolve('src/store'),
      styles: resolve('src/styles'),
      utils: resolve('src/utils'),
      views: resolve('src/views'),
    },
  },
  plugins: [vue()],
}
