import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/page/home'
import Detail from '@/page/detail'
import Item from '@/page/item'
import Login from '@/page/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'detail/:id',
          component: Detail
        },
        {
          path: 'item',
          component: Item,
          alias: '/'
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
