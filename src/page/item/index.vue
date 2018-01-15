<template>
  <ul class="list">
    <li v-for="item in postList">
      <Item v-bind:title="item.title" v-bind:postTime="item.postTime" v-bind:postId="item._id" ></Item>
    </li>
  </ul>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  import Item from '../../components/item.vue'

  export default {
    name: 'items',
    components: {
      Item
    },

    data() {
      return {
      }
    },

    mounted() {
      this.fetchPostList()
    },

    computed: {
      ...mapState(['postList'])
    },

    methods: {
      ...mapActions([
        'fetchPostList'
      ])
    }
  }
</script>

<style lang="stylus">
  .list
    list-style none
</style>
