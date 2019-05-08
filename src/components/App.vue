<template lang="pug">
  #app
    Navbar
    panel
    router-view
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style lang="sass">
#app
  display: flex
  background: #bfbfbf
  width: 100%
  height: 100vh
</style>
