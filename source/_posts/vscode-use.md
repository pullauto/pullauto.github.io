---
layout: post
title: "vscode使用"
date: 2021-02-18 17:36
reward: true
comments: true
tags: 
	- 开发工具
---



[官网地址](https://code.visualstudio.com/)

##### 设置成中文

1. 按快捷键“Ctrl+Shift+P”。
2. 在“vscode”顶部会出现一个搜索框。
3. 输入“configure language”，然后回车。
4. “vscode”里面就会打开一个语言配置文件。
5. 将“en-us”修改成“zh-cn”。
6. 按“Ctrl+S”保存设置。
7. 关闭“vscode”，再次打开就可以看到中文界面了。
<!-- more -->
##### **禁用自动更新**

文件 > 首选项 > 设置（代码 > 首选项 > 设置，搜索 自动更新 并将设置更改为none。

##### 常用的快捷键

对于 **行** 的操作：

- 重开一行：

  光标在行尾，回车即可；

  光标不在行尾，ctrl` + enter` 向下重开一行；ctrl+`shift + enter` 则是在上一行重开一行

- 删除一行：光标没有选择内容时，ctrl` + x` 剪切一行；ctrl +`shift + k` 直接删除一行

- 移动一行：`alt + ↑` 向上移动一行；`alt + ↓` 向下移动一行

- 复制一行：`shift + alt + ↓` 向下复制一行；`shift + alt + ↑` 向上复制一行

- ctrl + z 回退

对于 **词** 的操作：

- 选中一个词：ctrl` + d`

搜索或者替换：

- ctrl` + f` ：搜索
- ctrl` + alt + f`： 替换
- ctrl` + shift + f`：在项目内搜索

通过**Ctrl + `** 可以打开或关闭终端

Ctrl+P 快速打开最近打开的文件

Ctrl+Shift+N 打开新的编辑器窗口

Ctrl+Shift+W 关闭编辑器

**必备插件**
1. ##### Auto Close Tag
    自动闭合HTML/XML标签
    
2. ##### Auto Rename Tag
    自动完成另一侧标签的同步修改
    
4. ##### Path Intellisense
    智能路径提示，可以在你输入文件路径时智能提示。

6. ##### Bracket Pair Colorizer
    给嵌套的各种括号加上不同的颜色。
    
5. ##### Beautify
    格式化 html ,js,css

7. ##### Prettier
     格式化JavaScript / TypeScript / CSS 

##### 编辑插件

1. ##### css-auto-prefix
    自动添加 CSS 私有前缀。

2. ##### vetur
    vue语法高亮、智能感知、Emmet等
  
3. ##### GitLens
详细的 Git 提交日志。

4. ##### Turbo Console Log
快捷添加 console.log，一键 注释 / 启用 / 删除 所有 console.log

	ctrl + alt + l 选中变量之后，使用这个快捷键生成 console.log
	alt + shift + c 注释所有 console.log
	alt + shift + u 启用所有 console.log
	alt + shift + d 删除所有 console.log

##### 其他插件

1. ##### Import Cost
   计算引入包的大小

2. ##### vscode-icons
   改变编辑器里面的文件图标

3. ##### View In Browser
   浏览器里预览网页必备
   
4. ##### open in browser 
   打开浏览器（可自定义）