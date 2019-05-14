<template>
  <div id="app">
    <v-app :dark="theme">
      <Toolbar></Toolbar>
      <v-content>
        <v-container>
          <router-view></router-view>
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
    beforeCreate() {
      this.$store.commit('jwtDecode')
    }
  }
</script>

