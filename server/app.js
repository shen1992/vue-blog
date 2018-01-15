/**
 * Created by shen on 2017/1/29.
 */
var express = require('express')
var path = require('path');
var bodyParser = require('body-parser')
var session = require('express-session')
var app = express()

// app.use(express.static(path.join(__dirname, 'view')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized:false,
  cookie:{
    maxAge:1000*60*10*100 //过期时间设置(单位毫秒)
  }
}))

var router = require('./router/index')
app.use(router)
app.listen(8080)
