<template>
  <section class="side">
    <div class="side_img"></div>
    <h2 class="side_name">Shen</h2>
    <p class="side_des">小鸡前端</p>
  </section>
</template>

<script>
  export default {
    name: 'Side',
  }
</script>

<style lang="stylus">
  .side
    width 300px
    height 100vh
    background-image url("../assets/bg-11.jpg")
    background-size cover
    background-position center center
    padding-top 60px
    &_name
      color #fff
      margin-top 10px
    &_des
      color #fff
      margin-top 5px
    &_img
      width 128px
      height 128px
      border-radius 100%
      margin 0 auto
      background-image url("../assets/head.jpg")
      background-size cover
      background-position center center
</style>
