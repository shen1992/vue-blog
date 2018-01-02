import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home'
import Detail from '@/page/detail'
import Item from '@/page/item'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'detail',
          component: Detail
        },
        {
          path: '/item',
          component: Item
        }
      ]
    }
  ]
})
