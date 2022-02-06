import animate from 'animate.css'
import 'element-plus/dist/index.css'
import 'styles/common.scss'

import ElementPlus from 'element-plus'

import store from 'store'
import router from 'router'

import basic from 'mixins'

/**
 * Vue注册插件
 * @param app {App}
 */
export const registerPlugins = app => {
  app.use(animate)
  app.use(ElementPlus)
  app.use(store)
  app.use(router)
  app.mixin(basic)
}
