import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/user',
    component: Layout,
    hidden: true,
    children: [{
      path: 'index',
      name: 'UserManage',
      component: () => import('@/views/user/index'),
      meta: { title: '用户管理', icon: 'el-icon-s-custom' }
    }]
  },

  {
    path: '/tag',
    component: Layout,
    children: [{
      path: 'index',
      name: 'TagManage',
      component: () => import('@/views/tag/index'),
      meta: { title: '标签管理', icon: 'el-icon-collection-tag' }
    }]
  },

  {
    path: '/strategy',
    component: Layout,
    hidden: true,
    children: [{
      path: 'index',
      name: 'Strategy',
      component: () => import('@/views/strategy/index'),
      meta: { title: '策略线索', icon: 'el-icon-coin' }
    }]
  },

  {
    path: '/sale',
    component: Layout,
    redirect: '/sale/browse',
    name: 'SaleBrowse',
    meta: { title: '销售线索', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'browse',
        name: 'Browse',
        component: () => import('@/views/browse/index'),
        meta: { title: '浏览行为', icon: 'table' }
      },
      {
        path: 'trading',
        name: 'Trading',
        component: () => import('@/views/trading/index'),
        meta: { title: '交易行为', icon: 'tree' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
