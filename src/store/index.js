import Vue from 'vue'
import Vuex from 'vuex'
// vuex-persistedstate  持久化插件  防止刷新丢失
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginMsg: {
      username: '',
      password: '',
      token: ''
    }
  },
  mutations: {
    SET_LOGINMSG(state,loginMsg) {
      sessionStorage.setItem('user', JSON.stringify(loginMsg))
      state.loginMsg = loginMsg;
    }
  },
  actions: {

  }
})
