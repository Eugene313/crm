import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueJWT from 'vuejs-jwt'


import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import Toolbar from './components/Toolbar'
import Mailing from './views/Mailing'


Vue.component('Toolbar',Toolbar);
Vue.component('Mailing',Mailing);


Vue.use(Vuetify,{
  theme: {
    primary: '#F57C00', // #E53935
    secondary: '#F57C00', // #FFCDD2
    accent: '#F57C00' // #3F51B5
  }
});
Vue.use(VueAxios, axios);
Vue.use(VueJWT);





Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
