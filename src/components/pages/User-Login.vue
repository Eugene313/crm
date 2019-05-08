<template lang="pug">
  #user_login
    form#regForm(v-on:submit.prevent='onSubmit')
      p#error(v-if="error") {{ errorMessage }}
      .form-group
        label(for='login') Login
        input#login.form-control(type='text', 
                                 aria-describedby='emailHelp', 
                                 placeholder='Enter login',
                                 :class="{'is-invalid' : $v.login.$error,'is-valid':$v.login.required}" 
                                 v-model='login',
                                 @blur="$v.login.$touch()")
        p.invalid-feedback(v-if="$v.login.$error") This field is required.
        p.valid-feedback(v-if="$v.login.required") Looks good!
      .form-group
        label(for='password') Password
        input#password.form-control(type='password', 
                                    placeholder='Enter password', 
                                    v-model='password'
                                    v-on:blur="$v.password.$touch()"
                                    :class="{'is-invalid' : $v.password.$error,'is-valid':$v.password.required}")
        p.invalid-feedback(v-show="$v.password.$error") This field is required.
        p.valid-feedback(v-show="$v.password.required") Looks good!
      button.btn.btn-primary(type='submit'
                             :disabled="$v.$invalid") Login
      .spinner-wrap(v-if="spinner")
        .spinner-border(role='status')
          span.sr-only Loading...
</template>

<script>
import { required, maxLength } from 'vuelidate/lib/validators'
export default {
  data(){
    return {
      login : '',
      password : '',
      projectId : 11,
      url : 'http://192.168.0.143:9000/api/v1/auth/login',
      error : false,
      errorMessage : null,
      token : localStorage.getItem('access_token') || null,
      user : null,
      spinner : false,
      LoginPassword : '2Qsxzaw!'
    }
  },
  methods : {
    onSubmit(){
      this.spinner = true
      this.axios.post(this.url , {
        login : this.login,
        password : this.password,
        projectId : this.projectId
      })
      .then(response => {
        this.token = response.data.token
        localStorage.setItem('access_token', this.token)
        this.user = this.$jwt.decode(this.token)
        this.spinner = false
        this.$router.push({name: 'dashboard'})
      })
      .catch((error) => {
          this.error = true
          this.errorMessage = 'Incorrect username or password.'
          this.login = ''
          this.password = ''
          this.spinner = false
      });
    }
  },
  validations : {
    login : {
      required : required
    },
    password : {
      required : required
    }
  }
}
</script>
<style lang="sass" scoped>
  #user_login
    height: 80vh
    display: flex
    justify-content: center
    align-items: center
    #regForm
      background: #00000060
      box-shadow: 0 0 30px -10px #000000
      width: 350px
      position: relative
      border-radius: 8px
      padding: 20px;
      min-width: 320px
      #error
        width: 350px
        background: #ffdce0;
        border-bottom: none
        border-radius: 6px 6px 0 0;
        text-align: center
        position: absolute
        top: -55px
        left: 0
        right: 0
        font-size: 14px
        color: #86181d;
        padding: 20px 0
      .form-group
        position: relative
        margin-bottom: 20px 0
        label
          color: #ffffff;
        p
          position: absolute
          text-align: center
      .btn-primary
        width: 100%
        margin-top: 20px
      .spinner-wrap
        background: #2e2e2e50
        display: flex
        align-items: center
        justify-content: center
        position: absolute
        top: 0
        left: 0
        bottom: 0
        right: 0
</style>


