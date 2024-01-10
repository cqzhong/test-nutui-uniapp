import { createRouter } from 'uni-mini-router'
// 导入pages.json
import pagesJson from '../pages.json'
// 引入uni-parse-pages
import pagesJsonToRoutes from 'uni-parse-pages'
// 生成路由表
const routes = pagesJsonToRoutes(pagesJson)
const router = createRouter({
  routes: [...routes] // 路由表信息
})
router.beforeEach((_to, _from, next) => {
  // next入参 false 以取消导航
  // console.log('beforeEach to: ', _to)
  // console.log('beforeEach from: ', _from)
  next(true)
})
router.afterEach((_to, _from) => {
  // console.log('to: ', _to)
  // console.log('from: ', _from)
})
export default router
