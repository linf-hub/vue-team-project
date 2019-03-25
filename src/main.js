import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'


import VPCF from './assets/js/common'
Vue.prototype.$VPCF = VPCF

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
