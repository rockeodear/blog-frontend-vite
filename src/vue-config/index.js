import { createApp } from 'vue'
import App from '/src/App.vue'

/**
 * 创建Vue实例
 * @param node 挂载节点
 * @param resolve 挂载之前的一些操作
 */
export const createVueInstance = (node, resolve) => {
  const app = createApp(App)
  resolve(app)
  app.mount(node)
}
