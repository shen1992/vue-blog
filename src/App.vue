<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
*
  margin 0
  padding 0
html,
body
  height 100%
#app
  width 100%
  height 100%
  overflow hidden
  img
    width 400px
</style>
