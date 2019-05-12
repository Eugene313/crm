<template>
        <v-container fluid fill-height style="height: 80vh">
        <v-alert dismissible type="error" :value="error" class="error_auth">Authorization failed status code {{  }}</v-alert>
        <v-layout align-center justify-center>
          <v-flex xs12 sm5 md5 lg4 xl3>
            <v-card class="elevation-12">
              <v-toolbar>
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="valid" ref="form" validation>
                  <v-text-field v-model="login" 
                                prepend-icon="person" 
                                name="login" 
                                label="Login" 
                                type="text"
                                :rules="loginRules"
                                >
                  </v-text-field>
                  <v-text-field v-model="password" 
                                id="password" 
                                prepend-icon="lock" 
                                name="password" 
                                label="Password" 
                                type="password"
                                :rules="passwordRules"
                                >
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn  :disabled="!valid" 
                        @click="onSubmit"
                        >
                        Login
                </v-btn>
                <div class="spinner" v-show="spinner">
                 <v-progress-circular
                    indeterminate
                    :value="100"
                    color="blue-grey"
                  ></v-progress-circular>
                </div>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
    export default {
        data(){
          return {
            valid : false,
            loginRules : [
              v => !!v || 'Login is required'
            ],
            passwordRules : [
              v => !!v || 'Password is required'
            ],
            error : false,
            spinner : false,
            statusCode : ''
          }
        },
        methods : {
          onSubmit(){
            if (this.$refs.form.validate()){
                this.spinner = true
                this.axios.post(this.url , {
                  login : this.login,
                  password : this.password,
                  projectId : this.projectId
                })
                .then(function( response ){
                  this.spinner = false

                })
                .catch( error => {
                  localStorage.setItem('error',error);
                  this.spinner = false
                  this.statusCode = error
                  this.error = true
                  console.log(error.Error)
                })
              }
            },
        },
        computed : {
          login : {
            get(){
              return this.$store.state.login.login;
            },
            set(value){
                this.$store.commit('loginForm', value);
            }
          },
          password : {
            get(){
              return this.$store.state.login.password
            },
            set(value){
              this.$store.commit('passwordForm', value);
            }
          },
          projectId(){
            return this.$store.state.login.projectId
          },
          url(){
            return this.$store.state.login.url
          }
        }
    }
</script>
<style lang="sass">
  .login
    height: 100vh
  .error_auth
    position: absolute !important
    top: 0
    left: 0
    right: 0
  .spinner
    display: flex
    justify-content: center
    align-items: center
    background: #ffffff80
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    z-index: 9999999
</style>