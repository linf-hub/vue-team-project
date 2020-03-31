import Vue from 'vue'
// import './plugins/axios'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import VPCF from './assets/js/common'
import './plugins/element.js'

import './plugins/http'
import API from './httpConfig/commonAPI'

import "./assets/font/font.css";
import './assets/css/global.scss'
import './assets/css/common.scss'

Vue.prototype.$VPCF = VPCF
Vue.prototype.$API = API

Vue.config.devtools = true

Vue.config.productionTip = false

// 防止刷新丢失
if (sessionStorage.getItem('routeDatas')) {
  let routesDatas = JSON.parse(sessionStorage.getItem('routeDatas'))
  let routes = []
  VPCF.createRoute(routes,routesDatas)
  router.addRoutes(routes)
}

// 登录状态判断
// router.beforeEach((to, from, next) => {
//   next()
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
