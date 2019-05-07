<template lang="pug">
  #user_login
    form#regForm(v-on:submit.prevent='onSubmit')
      .form-group
        label(for='login') Login
        input#login.form-control(type='text', 
                                 aria-describedby='emailHelp', 
                                 placeholder='Enter login', 
                                 v-model='login')
      .form-group
        label(for='password') Password
        input#password.form-control(type='password', 
                                    placeholder='Password', 
                                    v-model='password')
      button.btn.btn-primary.disabled(type='submit') Submit

</template>

<script>
export default {
  data(){
    return {
      login : '',
      password : '',
      projectId : 11,
      url : 'http://192.168.0.143:9000/api/v1/auth/login'
    }
  },
  methods : {
    onSubmit(){
      this.axios.post(this.url , {
        login : this.login,
        password : this.password,
        projectId : this.projectId
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
      });
    }
  }
}
</script>
<style lang="sass" scoped>
  #user_login
    width: 100%
    height: 100vh
    display: flex
    justify-content: center
    align-items: center
    #regForm
      border: 1px solid #e2e2e2
      border-radius: 8px
      padding: 20px;
      min-width: 320px
</style>


