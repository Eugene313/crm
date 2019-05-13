export default {
    state: {
        login : '',
        password : '',
        projectId : 11,
        url : 'http://192.168.0.143:9000/api/v1/auth/login'
      },
      mutations : {
        loginForm(state,value){
          state.login = value;
        },
        passwordForm(state,value){
          state.password = value;
        },
      },
}