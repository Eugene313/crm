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
import colors from 'vuetify/es5/util/colors'

import Toolbar from './components/Toolbar'

Vue.component('Toolbar',Toolbar);

Vue.use(Vuetify, {
    theme: {
        primary: colors.lime.lime, // #E53935
        secondary: colors.lime.lime, // #FFCDD2
        accent: colors.lime.lime// #3F51B5
    }
});
Vue.use(VueAxios, axios);
Vue.use(VueJWT)



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
