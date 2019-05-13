export default {
  state : {
    token : localStorage.getItem('access_token') || null,
    currentUser : null
  },
  mutations : {
    removeToken () {
      localStorage.removeItem('access_token');
      location.reload()
    }
  },

}