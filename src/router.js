import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import notfound from './views/Notfound';
import Users from "./views/Projects";
import Mailing from "./views/Mailing";
import Statistics from "./views/Statistic";

import store from './store'


Vue.use(Router);
Vue.component('Login', Login);
Vue.component('notfound', notfound);
Vue.component('Users', Users);
Vue.component('Mailing', Mailing);
Vue.component('Statistics', Statistics);




const router = new Router({
  mode: 'history',
  routes: [
    {
      path : '/',
      redirect: { name: 'dashboard' }
    },
    {
      path : '/login',
      component: Login,
      name : 'login',
      beforeEnter (to,from,next) {
        if(localStorage.getItem('access_token')){
          next({ path: '/dashboard' })
        } else {
          next();
        }
      }
    },
    {
      path : '/users',
      component: Users,
      name : 'users'
    },
      {
          path : '/dashboard',
          component: Dashboard,
          name : 'dashboard'
      },
    {
      path: '/mailing',
      component : Mailing
    },
    {
      path: '/statistics',
      component : Statistics
    },
    {
      path : '/*',
      component : notfound
    },
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if(localStorage.getItem('access_token')){
      next();
    } else {
      store.commit('removeToken');
      next({ path: '/login' });
    }
  }
  next();
});

export default router;

