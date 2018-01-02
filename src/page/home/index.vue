<template>
  <div class="home">
    <Side></Side>
    <div class="home_content">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Side from '../../components/side.vue'
  import Item from '../../components/item.vue'

  export default {
    name: 'home',
    components: {
      Side,
      Item,
    },
    data() {
      console.log('1', this.$route.path);
      return {
        isTrue: this.$route.path !== '/detail',
        items: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          '12',
        ]
      }
    },
    methods: {
      goToDetail: function () {
        alert('123')
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
      padding 20px
      overflow scroll
</style>
