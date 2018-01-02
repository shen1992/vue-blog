<template>
  <ul>
    <li v-for="item in myItems">
      <Item></Item>
    </li>
  </ul>
</template>

<script>
  import Item from '../../components/item.vue'

  export default {
    name: 'items',
    components: {
      Item
    },
    data() {
      return {
        myItems: [
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
    }
  }
</script>

<style lang="stylus">

</style>
