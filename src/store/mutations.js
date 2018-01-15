import {
  POST_LIST,
  IS_LOGIN
} from './mutation-types'

export default {
  [POST_LIST](state, list) {
    state.postList = list
  },

  [IS_LOGIN](state, isLogin) {
    state.isLogin = isLogin
  }
}
