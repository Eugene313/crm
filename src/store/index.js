import Vue from 'vue'
import Vuex from 'vuex'

import toolbar from './modules/toolbar'
import login from './modules/login'


Vue.use(Vuex);

export default new Vuex.Store({
  modules : {
    toolbar,
    login
  }
})
