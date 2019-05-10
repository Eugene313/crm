<template>
  <div id="app">
    <v-app :dark="theme">
      <drawer></drawer>
      <v-content>
        <v-container fluid>
          <p>asdasd {{ theme }}</p>
          <router-view></router-view>
        </v-container>
      </v-content>

    </v-app>


  </div>
</template>
<script>
  export default {
    data(){
      return {
        drawer : true,
        avatarSize : 40,
        tile: true,
      }
    },
    computed : {
      theme(){
        return this.$store.state.theme;
      }
    }
  }
</script>
<style lang="sass">
.logo
  width: 10px
</style>
