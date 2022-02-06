import dayjs from 'dayjs'
import wow from 'wow.js'
/**
 * 全局属性配置
 * @param app {App}
 */

export const registerGlobalProperties = app => {
  app.config.globalProperties.$dayjs = dayjs
  app.config.globalProperties.$wow = wow
}
