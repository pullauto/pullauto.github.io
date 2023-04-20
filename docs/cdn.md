---
layout: post
title: "cdn加速获取资源"
date: 2020-02-11 9:36
reward: true
comments: true
tags: 
	- web
	- cdn
---

Content Delivery Network，统一加载网络资源，有利于提高网页加载速度。

------



#### jsDelivr加速

官网：[https://www.jsdelivr.com/?docs=gh](https://www.jsdelivr.com/?docs=gh)
[jsDelivr – Open Source CDN](https://www.jsdelivr.com/) 是一款免费开源的 CDN，国内速度表现良好，且统一 CDN 来源同样有利于加载速度

<!-- more -->

使用方式：
- GitHub CDN: `https://cdn.jsdelivr.net/gh/user/repo@version/file`
- npm: `https://cdn.jsdelivr.net/npm/package@version/file`

示例：
- GitHub`https://cdn.jsdelivr.net/gh/jquery/jquery@3.2.1/dist/jquery.min.js`
- npm: `https://cdn.jsdelivr.net/npm/jquery@3.2/dist/jquery.min.js`

在末尾添加/以获取目录列表:

```
GitHub: https://cdn.jsdelivr.net/gh/jquery/jquery/
npm: https://cdn.jsdelivr.net/npm/jquery/
```



#### UNPKG加速

官网：[https://unpkg.com/](https://unpkg.com/)
使用方式：
- npm：`unpkg.com/:package@:version/:file`

示例：
- npm：`https://unpkg.com/jquery@3.2.1/dist/jquery.min.js`
在末尾添加/以获取目录列表:
- npm：`https://unpkg.com/jquery@3.2.1/`