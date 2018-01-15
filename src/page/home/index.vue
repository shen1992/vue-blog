<template>
  <div class="home">
    <Side></Side>
    <div class="home_content">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  import Side from '../../components/side.vue'
  import Item from '../../components/item.vue'

  export default {
    name: 'home',
    components: {
      Side,
      Item,
    },

    data() {
      return {}
    },

    computed: {
      ...mapState(['isLogin'])
    },

    methods: {
      ...mapActions(['isUserLogin'])
    },

    mounted() {
      if(!this.isLogin) {
        this.isUserLogin().then(() => console.log(this.isLogin))
//        this.$router.push({path: '/login'})
      }
    }
  }
</script>

<style lang="stylus">
  .home
    display flex
    &_content
      flex 1
      height 100vh
      background #515457
      padding 20px 20px 0 20px
      overflow scroll
</style>
