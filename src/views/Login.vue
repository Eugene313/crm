<template>
        <v-container fluid fill-height class="login">
        <v-layout align-center justify-center>
          <v-flex xs12 sm5 md5 lg4 xl3>
            <v-card class="elevation-12">
              <v-toolbar dark color="#e25e00">
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field v-model="login" prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                  <v-text-field v-model="password" id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="onSubmit" color="#e25e00">Login</v-btn>
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
            login : '',
            password : '',
            url : 'http://192.168.0.143:9000/api/v1/auth/login',
            url2  : 'http://seriyps.ru:3210/',
            projectId : 11,
          }
        },
        methods : {
          onSubmit(){
            this.axios.post(this.url2 , {
              login : this.login,
              password : this.password,
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error)
            });
          }
        }
    }
</script>

<style scoped lang="sass">
    .login
        height: 80vh
</style>