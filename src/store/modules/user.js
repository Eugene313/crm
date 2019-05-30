import Vue from 'vue'

export default {

  state : {
    token : localStorage.getItem('access_token') || null,
    currentUser : {}
  },
  mutations : {
    removeToken (state) {
      localStorage.removeItem('access_token');
      state.token = null;
    },
    addToken (state, payload) {
      state.token = payload;
    },
    jwtDecode (state) {
      if (state.token) {
        state.currentUser = Vue.$jwt.decode(state.token);
      }
    }
  },
  getters : {
    computedToken (state) {
      return state.token;
    },
    getCurrentUser (state) {
      return state.currentUser.role
    }
  }

}