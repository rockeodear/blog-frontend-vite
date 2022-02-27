import { Search } from '@element-plus/icons-vue'
import SvgIcon from 'components/basic/svg-icon/index.vue'
/**
 * 注册全局组件
 * @param app {App}
 */
export const registerComponent = app => {
  app.component(Search)
  app.component('svg-icon', SvgIcon)
}
