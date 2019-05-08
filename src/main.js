import Vue from 'vue'

import App from './components/App.vue'
import UserLogin from './components/pages/User-Login.vue'
import Dashboard from './components/pages/Dashboard.vue'
import Navbar from './components/Navbar.vue'
import Panel from './components/Panel.vue'



import VueJWT from 'vuejs-jwt'
import store from './store';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueJWT)
Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.use(Vuelidate)
Vue.use(BootstrapVue);

Vue.component('User-Login', UserLogin);
Vue.component('Dashboard', Dashboard);
Vue.component('Navbar', Navbar);
Vue.component('Panel', Panel);

const router = new VueRouter({
  store,
  mode:'history',
  routes : [
    {
      path : '/login',
      component : UserLogin
    },
    {
      path : '/dashboard',
      name: 'dashboard',
      component : Dashboard
    }
  ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
