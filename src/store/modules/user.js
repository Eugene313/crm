export default {
  state : {
    token : localStorage.getItem('access_token') || null,
    currentUser : null
  },
  mutations : {
    removeToken (state) {
      localStorage.removeItem('access_token');
      state.token = null;
    },
    addToken (state, payload) {
      state.token = payload;
    }
  },
  getters : {
    computedToken (state) {
      return state.token;
    }
  }

}