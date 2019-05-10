import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme : false
  },
  mutations: {
    changeTheme(state){
      state.theme = !state.theme;
    }

  },
  getters : {

  },
  actions : {

  }
})
