import {get, post} from '../utils/http'

export const fetchPostList = () => get('http://localhost:9527/list')

export const userLogin = (username, password) => post('http://localhost:9527/login', {username, password})

export const isUserLogin = () => get('http://localhost:9527/login', {withCredentials: true})

export const fetchSinglePost = (params) => get('http://localhost:9527/singlepost', params)

export const fetchCommentList = (params) => get('http://localhost:9527/userComment', params)

export const submitComment = (params) => post('http://localhost:9527/userComment', params)
