<template lang="pug">
  #navbar
    .menu
      .nav
        router-link.btn.btn-secondary(to="/")
          i.fas.fa-home
          span Home
      .login
        router-link.btn.btn-secondary(to="/login",v-if="false")
          i.fas.fa-sign-in-alt
          span Login
        router-link.btn.btn-secondary(to="/login",v-else)
          i.fas.fa-power-off
          span Logout
</template>
<script>
export default {
  data(){
    return {
     
    }
  }
}
</script>
<style lang="sass" scoped>
  #navbar
    position: fixed
    top: 0
    right: 0
    left: 0
    z-index: 10
    .menu
      display: flex
      justify-content: space-between
      align-items: center
      background: #212121
      box-shadow: 0 10px 30px -20px #000000
      width: 100%
      height: 80px
      .nav
        a
          margin: 0 30px
          text-decoration: none
          color: #ffffff
          font-family: Arial
        i
          margin: 0 5px
      .login
        a
          margin: 0 30px
          text-decoration: none
          color: #ffffff
        i
          margin: 0 5px
</style>
