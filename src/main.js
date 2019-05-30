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


import Toolbar from './components/Toolbar';
import Mailing from './views/Mailing';
import chart from './components/chart'

import VueChartJs from 'vue-chartjs'


Vue.component('Toolbar',Toolbar);
Vue.component('Mailing',Mailing);
Vue.component('chart',chart);

Vue.component('Radar', {
  extends: VueChartJs.Doughnut,
  mounted () {
    this.renderChart({
      labels: ['Blue', 'February', 'March'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#fb6363',
          data: [40, 39, 10,]
        },
      ]
    })
  }

});


Vue.use(Vuetify,{
  theme: {
    primary: '#ffb300',
    secondary: '#ffb300',
    accent: '#ffb300'
  }
});

Vue.use(VueAxios, axios);
Vue.use(VueJWT);


Vue.config.productionTip = false;

new Vue({
  created () {
    // this.$store.commit('jwtDecode');
  },
  router,
  store,
  render: h => h(App),
},).$mount('#app');
