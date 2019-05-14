import axios from 'axios'
import router from '../../router'

export default {
    state: {
      login : '',
      password : '',
      projectId : 11,
      url : 'http://192.168.0.143:9000/api/v1/auth/login',
      loading : false,
      snackbar : false
    },
    mutations : {
      loginForm (state, value) {
        state.login = value;
      },
      passwordForm (state, value) {
        state.password = value;
      },
      onLoading (state, value) {
        state.loading = value
      },
      onSnackbar (state, value) {
        state.snackbar = value
      }
    },
    actions : {
      userLogin ({state, commit}) {
        commit('onLoading',true);
        axios.post(state.url, {
          login : state.login,
          password : state.password,
          projectId : state.projectId,
        })
          .then(response => {
            commit('onLoading',false);
            localStorage.setItem('access_token',response.data.token);
            commit('addToken',localStorage.getItem('access_token'));
            router.push('/dashboard');
          })
          .catch(() => {
            commit('onLoading', false);
            commit('onSnackbar',true);
          });
      }
    },
    getters : {
      computedLoading (state) {
        return state.loading
      },
      computedSnackbar (state) {
        return state.snackbar
      }
    }
}