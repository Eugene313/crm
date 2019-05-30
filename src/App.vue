<template>
  <div id="app">
    <v-app :dark="theme">
      <Toolbar></Toolbar>
      <v-content>
        <v-container>
          <transition name="router-anim"   enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
            <router-view></router-view>
          </transition>
        </v-container>
      </v-content>
      <v-footer class="pa-3" app>
        <v-spacer></v-spacer>
        <div>Quantum projects &copy; {{ new Date().getFullYear() }}</div>
      </v-footer>
    </v-app>
  </div>
</template>
<script>
  export default {
    computed : {
      theme(){
        return this.$store.state.toolbar.theme;
      }
    },
    created(){
      this.$store.commit('jwtDecode')
    }
  }
</script>
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";
.fadeOut {
  display: none;
}
</style>

