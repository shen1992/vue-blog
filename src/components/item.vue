<template>
  <section class="item">
    <p to="detail" v-on:click="goToDetail" class="item_title" >{{title}}</p>
    <p class="item_desc">我是描述</p>
    <div class="item_time">{{formatTitle}}</div>
  </section>
</template>

<script>
  import moment from 'moment'

  export default {
    name: 'item',
    props: ['title', 'postTime', 'postId'],
    data () {
      return {
      }
    },

    methods: {
      goToDetail: function () {
        this.$router.push({
          path: `detail/${this.postId}`
        })
      }
    },

    computed: {
      formatTitle: function () {
        return moment(new Date(this.postTime)).format('YYYY-MM-DD')
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
    &_title
      color #ff4081
      font-size 24px
      margin-bottom 15px
    &_desc,
    &_time
      color #999
      font-size 16px
    &_desc
      margin-bottom 10px
      margin-top 10px
      text-align center
    &_time
      text-align right
</style>
