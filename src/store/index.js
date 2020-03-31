import Vue from 'vue'
import Vuex from 'vuex'
// vuex-persistedstate  持久化插件  防止刷新丢失
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })],
  state: {
    loginMsg: {
      username: '',
      password: '',
      token: ''
    },
    formData: {}
  },
  mutations: {
    SET_LOGINMSG(state, formData) {
      sessionStorage.setItem('user', JSON.stringify(formData))
      state.formData = formData;
    }
  },
  actions: {

  },
  getters: {

  }
})
