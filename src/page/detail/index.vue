<template>
  <div>
    <div class="detail">
      <div class="detail_time">
        <Icon type="calendar" size="17" />
        <p class="detail_time_num">{{time}}</p>
      </div>
      <p class="detail_title">{{postDetail.title}}</p>
      <section v-html="postDetail.content" class="detail_content"></section>
    </div>
    <ul class="detail_list">
      <li v-for="item in commentList">{{item.commentName}}{{item.commentContent}}{{item.commentTime}}</li>
    </ul>
    <div class="comment">
      <div class="comment_content">
        <Icon type="person" class="comment_i" />
        <Input type="textarea" placeholder="请输入评论" v-model="value" />
      </div>
      <Button class="comment_btn" v-on:click="submitComment">提交</Button>
    </div>
  </div>
</template>

<script>
  import {Icon, Input, Button} from 'iview'
  import moment from 'moment'

  import {fetchSinglePost, fetchCommentList, submitComment} from '../../request/getData'

  export default {
    name: 'detail',

    components: {
      Icon,
      Input,
      Button
    },

    data() {
      return {
        postDetail: '',
        commentList: [],
        value: ''
      }
    },

    mounted() {
      fetchSinglePost({_id: this.$route.params.id}).then(resp => {
        this.postDetail = resp
      })
      fetchCommentList({_id: this.$route.params.id}).then(resp => {
        this.commentList = resp
      })
    },

    methods: {
      submitComment() {
        let params = {
          commentName: '游客',
          commentContent: this.value,
          commentTime: new Date().getTime(),
          type: `comment${this.$route.params.id}`
        }
        submitComment(params).then(resp => {
          this.commentList.push(params)
        })
      }
    },

    computed: {
      time: function () {
        return moment(new Date(this.postDetail.postTime)).format('YYYY-MM-DD')
      }
    }
  }
</script>

<style lang="stylus">
  .detail
     border 1px solid #2f2f2f
     border-radius 6px
     box-shadow 4px 4px 18px rgba(0,0,0,0.46)
     padding 15px
     color rgb(153, 153, 153)
     margin-bottom 15px
     &_content
       margin-top 15px
       font-size 17px
     &_title
        color #ff4081
        font-size 26px
        margin-top 30px
        text-align center
     &_time
       display flex
       justify-content flex-end
       align-items center
       color #aaa
       &_num
         font-size 17px
         margin-left 10px
     &_list
       color #999
       margin-bottom 15px
       font-size 16px
  .comment
    margin-bottom 15px
    display flex
    flex-direction column
    &_btn
      margin-top 15px
      align-self flex-end
    &_content
      display flex
      align-items center
    &_i
      font-size 26px
      color #fff
      margin-right 15px
</style>
