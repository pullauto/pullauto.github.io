---
layout: post
title: "chrome浏览器使用技巧"
date: 2020-7-04 10:00
reward: true
comments: true
tags: 
	- chrome
---

#### 快捷键技巧

##### 常用的

1. **清除浏览器缓存刷新：**Ctrl+F5
6. **搜索当前页面内容：**Ctrl+F       Ctrl+G       F3
7. **恢复之前关闭的标签页：**Ctrl+Shift+T ，Chrome会保留最近10个已关闭标签的历史。
8. **打开Chrome的任务管理器：**Shift+Esc ，可以让你监控Chrome中每个标签的资源占用
9. **将所有打开的页面保存在书签中的新建文件夹内：**Ctrl+Shift+D
10. **将剪切板中的内容无格式粘贴：**Ctrl+Shift+V 

<!--more-->

##### 还行的

1. **Ctrl+T：打开新的标签页**
2. **Ctrl+N：打开新的窗口**
3. **Ctrl+W：关闭当前标签页**
4. **空格键：向下滚动一个完整的页面**
5. **Shift+空格键：向上滚动一个完整的页面**
6. **Ctrl+Tab：按顺序切换标签页**
7. **Ctrl+1、2……8：切换到数字对应的标签页（如果标签页存在）**
8. **Ctrl+点击链接：将链接在新标签页打开，且不离开当前浏览页面**
9. **Shift+点击链接：将链接在新窗口打开**
10. **Ctrl+Shift+点击链接：将链接在新标签页打开，并跳转至新标签页**

#### 开发者技巧

**1.快速寻找文件：**

F12 - source --  ctrl +P  输入文件名  搜索

**2.在源代码中搜索代码**

F12 -- Elements  ctrl + F 输入搜索内容

**3.使用多个插入符进行选择**

当编辑一个文件的时候，你可以按住Ctrl在你要编辑的地方点击鼠标，可以设置多个插入符，这样可以一次在多个地方编辑

**4.获取网页所有图片：**

F12 -- Console

```javascript
$$('img').map(function(item){return item.src}).join("\r\n")  //或者
[...$$("img")].map(a => a.src).join('\r\n')
```

复制所有链接使用`copy($$('a').map(function(item){return item.href;}))`然后把这些地址放在一个文件`url.txt`内

接下来用[wget](https://link.juejin.im/?target=http%3A%2F%2Fgnuwin32.sourceforge.net%2Fpackages%2Fwget.htm)一键下载。`wget -i url.txt -P ./img` 所有图片都下载到本地目录**img**了。

**5.地址栏智能搜索**

当你曾经使用Chrome打开过某个具有搜索功能的网站，并且使用了这个网站的搜索引擎进行搜索，那么当你下次在Chrome地址栏中输入这个网址的时候，Chrome会在地址栏最右端提示你“按 Tab 可通过进行搜索”，当你按下 Tab键 再输入搜索内容时，Chrome会直接使用这个网站的搜索引擎进行搜索。

也可以自行设置：打开设置>搜索引擎>管理搜索引擎

**关键词**可随意设置，**查询网址**为网站的搜索引擎地址

例如：github的查询网址：

https://github.com/search?q=%s&ref=opensearch

我的**github**搜索引擎关键字是**git**输入后按**Tab**即可搜索github中的内容



还有一些在element中修改样式等