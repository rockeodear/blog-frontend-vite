import { registerRouterGuards } from 'router/router-guards'
import { createRouter, createWebHistory } from 'vue-router'
import routerViews from 'router/router-views'

//创建路由
const router = createRouter({
  history: createWebHistory(),
  routes: routerViews,
})
// 路由守卫
registerRouterGuards(router)

console.log(router.getRoutes())

export default router
