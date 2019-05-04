import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    name: 'adasd',
    meta: {
      title: 'example',
      icon: 'example'
    },
    children: [
      {
        path: 'try',
        component: () => import('@/views/login/index'),
        name: 'Guide',
        meta: { title: 'Guide', icon: 'dashboard', affix: true }
      },
      {
        path: 'asdas',
        component: () => import('@/views/login/index'),
        name: 'Dashboard',
        hidden: true,
        meta: { title: 'dashboard', icon: 'dashboard', affix: true }
      },
      {
        path: 'qwe',
        component: () => import('@/views/login/index'),
        name: 'sdasd',
        meta: { title: 'Guide', icon: 'dashboard', affix: true }
      }
    ]
  }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
