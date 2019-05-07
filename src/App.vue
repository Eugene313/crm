<template lang="pug">
  #app
    .container
      router-view
      router-link(to='/login') Перейти к Foo
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="sass">
#app
  width: 100%
</style>
