---
layout: post
title: "node基础"
date: 2020-5-5 9:36
reward: true
comments: true
tags: 
	- npm
	- node
---

> Node.js 是一个基于 Chrome V8 引擎的 Javascript 运行环境

Node.js使用了一个事件驱动的、非阻塞式I/O的模型，轻量又高效，它的底层是用C/C++编写的。



#### Node.js 回调函数

Node.js 异步编程的直接体现就是回调。

异步编程依托于回调来实现，但不能说使用了回调后程序就异步化了。

回调函数在完成任务后就会被调用，Node 使用了大量的回调函数，Node 所有 API 都支持回调函数。

```javascript
var data = fs.readFileSync('input.txt');//同步
console.log(data.toString());
console.log("程序执行结束!");

fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);//异步
    console.log(data.toString());
});
console.log("程序执行结束!");
```

阻塞（同步sync）是按顺序执行的，

而非阻塞（异步asyn）是不需要按顺序的