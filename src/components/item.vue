<template>
  <section class="item">
    <p to="detail" v-on:click="goToDetail" >我是文章标题</p>
    <p>我是描述</p>
    <div>我是标签</div>
  </section>
</template>

<script>
  export default {
    name: 'item',
    methods: {
      goToDetail: function () {
        this.$router.push({
          path: 'detail'
        })
      }
    }
  }
</script>

<style lang="stylus">
  .item
    position relative
    border 1px solid #2f2f2f
    margin-bottom 20px
    padding 20px
    border-radius 6px
    -webkit-box-shadow 4px 4px 18px rgba(0,0,0,0.46)
    box-shadow 4px 4px 18px rgba(0,0,0,0.46)
</style>
