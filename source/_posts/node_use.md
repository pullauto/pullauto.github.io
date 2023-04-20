---
layout: post
title: "node使用"
date: 2020-5-5 9:36
reward: true
comments: true
tags: 
	- npm
	- node
---

## node使用
```javascript
var http = require("http");    //#引入http模块
var express = require('express') // 导入express模块
var port = 3000		//#设置访问端口
// 创建一个express实例
var app = express();
//#创建一个web服务，web服务包括请求request和响应response两部分主体。
var server = http.createServer(function(request,response){
    //#设置响应头，包括状态码200，和内容类型
  response.writeHead(200{'ContentType':'text/plain'}); 
    //#发送响应数据
    response.end("Hello, world!")  
})


// 执行app的get请求处理，这里访问的是根目录 
app.get('/', function (req, res) {
   res.send('Hello World');
})
// 执行app的get请求处理，处理访问ahout目录下的请求
app.get('/ahout', function (req, res) {  //这里需要给定绝对路径
   res.sendFile( __dirname + "/pages/" + "about.html" );
})
//中间件 express.static 来设置静态文件
app.use('/public',express.static('public'))

// 创建web服务，设定端口号和ip地址 
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port) 
})

server.listen(port)  //#设置访问端口
//server.listen(3000,'0.0.0.0')    #添加公网IP地址访问
server.listen(port,function(){/* 监听方法 */
	console.log('我的nodejs服务启动了，地址为127.0.0.1:'+port)
})
```

## **Nodejs Websocket实现**

```javascript

```

