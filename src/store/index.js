import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme : true
  },
  mutations: {
    changeTheme(state){
      return state.theme;
    }

  },
  getters : {

  },
  actions : {

  }
})
