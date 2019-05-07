import Vue from 'vue'

import App from './App.vue'
import UserLogin from './assets/pages/User-Login.vue'
import Dashboard from './assets/pages/Dashboard.vue'


import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.component('User-Login', UserLogin);
Vue.component('Dashboard', Dashboard);

const router = new VueRouter({
  routes : [
    {
      path : '/login',
      component : UserLogin
    },
    {
      path : '/dashboard',
      component : Dashboard
    }
  ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
