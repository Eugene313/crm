import Vue from 'vue'
import Vuex from 'vuex'




import toolbar from './modules/toolbar'
import login from './modules/login'
import user from './modules/user'



Vue.use(Vuex);

export default new Vuex.Store({
  modules : {
    toolbar,
    login,
    user
  }
})
