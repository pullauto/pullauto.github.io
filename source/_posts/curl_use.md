---
layout: post
title: "curl命令使用"
reward: true
comments: true
tags: 
	- Linux
	- win
---

`curl` 是一种命令行工具，作用是发出网络请求，然后得到和提取数据，显示在“标准输出”（stdout）上面。

**[curl](https://so.csdn.net/so/search?q=curl&spm=1001.2101.3001.7020)**是利用URL语法在命令行方式下工作的开源文件传输工具。

它被广泛应用在Unix、多种Linux发行版中，并且有DOS和Win32、Win64下的移植版本。

常规CURL下载Github Repo.tar.gz
非私有仓
##### 指定路径存放并重命名
curl -Ls  https://github.com/nodejs/node/tarball/v16.6.2  > node.tar.gz 

##### 保留tar.gz原名字
curl -LsO  https://github.com/nodejs/node/tarball/v16.6.2

-L 参数会让 HTTP 请求跟随服务器的重定向。curl 默认不跟随重定向。
-s 是silent，就是不输出详细过程
-O 把输出写到该文件中，保留远程文件的文件名

