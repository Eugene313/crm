<template>
        <v-container fluid fill-height class="login">
        <v-layout align-center justify-center>
          <v-flex xs12 sm5 md5 lg4 xl3>
            <v-card class="elevation-12">
              <v-toolbar dark color="#e25e00">
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
                <v-btn :disabled="!valid" @click="onSubmit" color="#e25e00">Login</v-btn>
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
            ]
          }
        },
        methods : {
          onSubmit(){
            if (this.$refs.form.validate()){
                this.axios.post(this.url , {
                  login : this.login,
                  password : this.password,
                  projectId : this.projectId
                })
                .then((response)=> {
                  console.log( this.login)
                })
                .catch((error)=>{
                  console.log(error)
                })
              }
            }
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

<style scoped lang="sass">

</style>