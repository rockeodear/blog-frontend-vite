import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { svgBuilder } from './src/components/basic/svg-icon/svgBuilder.js'

const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      api: resolve(__dirname, 'src/api'),
      components: resolve(__dirname, 'src/components'),
      lang: resolve(__dirname, 'src/lang'),
      mixins: resolve(__dirname, 'src/mixins'),
      network: resolve(__dirname, 'src/network'),
      router: resolve(__dirname, 'src/router'),
      store: resolve(__dirname, 'src/store'),
      styles: resolve(__dirname, 'src/styles'),
      utils: resolve(__dirname, 'src/utils'),
      views: resolve(__dirname, 'src/views'),
      'vue-config': resolve(__dirname, 'src/vue-config'),
    },
  },
  server: {
    host: 'localhost',
    port: '2022',
    open: true,
    https: false,
    force: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:1231',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [vue(), svgBuilder('./src/icons/')],
})
