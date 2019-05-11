import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import Drawer from './components/Drawer'

Vue.component('Drawer',Drawer);

Vue.use(Vuetify);
Vue.use(VueAxios, axios);
Vue.use(Vuetify, {
  iconfont: 'md'
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
