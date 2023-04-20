---
layout: post
title: "google浏览器使用edge的扩展"
date: 2021-02-10 9:00
reward: true
comments: true
tags: 
	- Win
---

1. 在 `Edge` 浏览器输入：`edge://version/`，

   `用户配置路径：xxx`，路径下的` Extensions`文件夹就是 Edge 安装扩展的目录.

   <!--more-->

2. 找到需要安装到 Chrome 的插件的目录，

   edge中在扩展打开 `开发人员模式` 即可查看 `插件ID`

   ```
   
   C:\Users\你的电脑用户名\AppData\Local\Google\Chrome\User Data\Default\Extensions\插件ID
   ```

3. 在 Chrome 浏览器输入：`chrome://extensions/`，并点击 “加载已解压的扩展程序” 按钮，选择Edge 扩展目录插件ID下的文件
   某些插件需要重启浏览器.