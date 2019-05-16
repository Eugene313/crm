<template>
  <div>
    <v-container fluid fill-height id="login">
      <v-layout align-center justify-center>
        <v-flex xs12 sm3 md3 lg3 xl3>
          <v-card class="elevation-12">
            <v-toolbar>
              <v-avatar
                      size="40"
                      tile="tile">
                <img class="logo" src="../assets/img/logo.png" alt="">
              </v-avatar>
              <v-toolbar-title>
                <span style="color:#de573f;font-weight:bold;">Quantum</span> Projects
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form
                      v-model="valid"
                      ref="form"
                      validation
                      @submit.prevent="onSubmit">
                <v-text-field
                        v-model="login"
                        prepend-icon="person"
                        name="login"
                        label="Login"
                        type="text"
                        :rules="loginRules">
                </v-text-field>
                <v-text-field
                        v-model="password"
                        id="password"
                        prepend-icon="lock"
                        name="password"
                        label="Password"
                        type="password"
                        :rules="passwordRules">
                </v-text-field>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                          :disabled="!valid"
                          :loading="loading"
                          type="submit">
                    Login
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-snackbar
              v-model="snackbar"
              color="error"
              :timeout="3000">
        Wrong login or password!
        <v-btn
                flat
                @click="snackbar = false">
          Close
        </v-btn>
      </v-snackbar>
    </v-container>
  </div>
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
          }
        },
        methods : {
          onSubmit(){
            if ( this.$refs.form.validate() ) {
              this.$store.dispatch('userLogin');
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
              return this.$store.state.login.password;
            },
            set(value){
              this.$store.commit('passwordForm', value);
            }
          },
          snackbar : {
            get () {
              return this.$store.getters.computedSnackbar;
            },
            set (value) {
              this.$store.commit('onSnackbar', value);
            }
          },
          loading () {
            return this.$store.getters.computedLoading
          },
        }
    }
</script>
<style>

</style>