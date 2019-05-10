import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Dashboard from './views/Dashboard'

Vue.use(Router);
Vue.component('Login', Login);

export default new Router({
  mode: 'history',
  routes: [
    {
      path : '/login',
      component: Login,
      name : 'login'
    },
    {
      path : '/dashboard',
      component: Dashboard,
      name : 'dashboard'
    }
  ]
})
