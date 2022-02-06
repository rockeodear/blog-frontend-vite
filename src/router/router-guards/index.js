/**
 * 导航守卫注册
 * @param router
 */
export const registerRouterGuards = router => {
  registerPreGuards(router)
  registerAfterGuards(router)
}

const registerPreGuards = router => {}

// 后置守卫
const registerAfterGuards = router => {
  router.afterEach((to, from, failure) => {})
}
