---


layout: post
title: "使用不蒜子添加阅读统计量"
date: 2020-02-10 10:36
reward: true
comments: true
tags: 
	- hexo
	- web
---

不蒜子官网：http://busuanzi.ibruce.info/
官网内容：

```html
<script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
<span id="busuanzi_container_site_pv">本站总访问量<span id="busuanzi_value_site_pv"></span>次</span>
```
<!-- more -->

引入外部 JavaScript

```html
<script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
```

这段代码可以写在footer.ejs里或者header.ejs里或者layout.ejs里

#### 添加站点访客数

```html
<span id="busuanzi_container_site_uv"> 
   本站访客数：<span id="busuanzi_value_site_uv">
</span>人
```



#### 添加站点访问量

```html
<span id="busuanzi_container_site_uv"> 
   本站访问量：<span id="busuanzi_value_site_uv"></span>人次
</span>
```

计算访问量的方法有两种：
算法a：pv的方式，单个用户连续点击n篇文章，记录n次访问量。
算法b：uv的方式，单个用户连续点击n篇文章，只记录1次访客数。

#### 添加文章访问量

```html
<span id="busuanzi_container_page_pv">
   本文总阅读量：<span id="busuanzi_value_page_pv"></span>次
</span>
```

------
参考链接：

[不蒜子官网](http://busuanzi.ibruce.info/)

[心彻](https://www.jianshu.com/u/a55263eb2022)