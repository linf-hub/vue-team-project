import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

import about from './about'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, // 基础路由

      ...about, // 模块分离路由
  ]
})
