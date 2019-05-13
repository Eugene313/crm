<template>
  <div id="app">
    <v-app :dark="theme">
      <Toolbar></Toolbar>
      <v-content>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
<script>
  export default {
    computed : {
      theme(){
        return this.$store.state.toolbar.theme;
      }
    }
  }
</script>

