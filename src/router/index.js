import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login')
    }, // 基础路由
    {
      path: '/',
      name: 'dashboard',
      component: () => import('@/components/dashboard')
    }

  ]
})
