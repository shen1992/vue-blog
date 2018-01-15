<template>
  <div class="login">
    <section class="login_content">
      <div class="login_content_item">
        <Icon type="person" size="26" class="login_content_i" />
        <Input v-model="value" placeholder="请输入用户名" />
      </div>
      <div class="login_content_item">
        <Icon type="locked" size="26" class="login_content_i" />
        <Input v-model="password" placeholder="请输入密码" type="password" />
      </div>
      <Button class="login_content_btn" v-on:click="userLogin(value, password)">登录</Button>
    </section>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import {Input, Icon, Button} from 'iview'

  import {userLogin} from '../../request/getData'

  export default {
    name: 'login',

    components: {
      Input,
      Icon
    },

    data() {
      return {
        value: '',
        password: ''
      }
    },

    methods: {
      userLogin: function (value, password) {
        userLogin(value, password).then(resp => {
          if (resp.data.code === '200') {
            this.$Message.info('登录成功！')
            this.$router.push({path: '/'})
//            this.$store.commit('IS_LOGIN', true)
            return
          }
          this.$Message.info('用户名或密码错误！')
        })
      }
    }
  }
</script>

<style lang="stylus">
  .login
    width 100%
    height 100%
    display flex
    justify-content center
    align-items center
    &_content
      width 300px
      height 400px
      border 1px solid goldenrod
      border-radius 4px
      padding 15px
      display flex
      flex-direction column
      justify-content center
      &_btn
        margin-top 30px
      &_item
        display flex
        align-items center
        margin-bottom 15px
      &_i
       margin-right 10px
</style>

