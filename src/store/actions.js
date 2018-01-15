import {
  fetchPostList,
  isUserLogin
} from '../request/getData'
import {
  POST_LIST,
  IS_LOGIN
} from './mutation-types'

export default {
  async fetchPostList({commit, state}) {
    let res = await fetchPostList()
    commit(POST_LIST, res.postList)
  },

  async isUserLogin({commit, state}) {
    let res = await isUserLogin()
    if (res === '200') {
      commit(IS_LOGIN, true)
      return
    }
    commit(IS_LOGIN, false)
  }
}
