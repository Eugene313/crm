<template>
  <div id="user_login">
    <form id="regForm" 
          v-on:submit.prevent="onSubmit">
      <div class="form-group">
        <label for="exampleInputEmail1">Login</label>

        <input  type="text" 
                class="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Enter login" 
                v-model="login">

        <small  id="emailHelp" 
                class="form-text text-muted">
                </small>
      </div>

      <div class="form-group">
        <label  for="exampleInputPassword1">Password</label>
        
        <input  type="password" 
                class="form-control" 
                id="exampleInputPassword1" 
                placeholder="Password" 
                v-model="password">
      </div>

      <button type="submit" 
              class="btn btn-primary disabled">Submit</button>
    </form>
  </div>
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
      console.log('111');
      this.axios.post(this.url , {
        login : this.login,
        password : this.password,
        projectId : this.projectId
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        if(error){
          console.log(error.status);
        }
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


