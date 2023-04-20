---
layout: post
title: "将VScode添加到右键"
date: 2021-02-18 17:36
reward: true
comments: true
tags: 
	- 开发工具
---

#### 将VScode添加到右键

创建一个文本文档，对文件的命名没有要求，创建好之后，复制下方的代码全部保存到该文档中
将自己的安装路径替换上去，如下图，一共需要替换6处地方
将路径中的` \ `换成` \\ `才行
最后，将文档的后缀名改为 `xxx.reg`，双击运行该文件，一直点击是

```
Windows Registry Editor Version 5.00
    
[HKEY_CLASSES_ROOT\*\shell\VSCode]
@="Open with Code"
"Icon"="E:\\Microsoft VS Code\\Code.exe"
    
[HKEY_CLASSES_ROOT\*\shell\VSCode\command]
@="\"E:\\Microsoft VS Code\\Code.exe\" \"%1\""
    
Windows Registry Editor Version 5.00
    
[HKEY_CLASSES_ROOT\Directory\shell\VSCode]
@="Open with Code"
"Icon"="E:\\Microsoft VS Code\\Code.exe"
    
[HKEY_CLASSES_ROOT\Directory\shell\VSCode\command]
@="\"E:\\Microsoft VS Code\\Code.exe\" \"%V\""
    
Windows Registry Editor Version 5.00
    
[HKEY_CLASSES_ROOT\Directory\Background\shell\VSCode]
@="Open with Code"
"Icon"="E:\\Microsoft VS Code\\Code.exe"
    
[HKEY_CLASSES_ROOT\Directory\Background\shell\VSCode\command]
@="\"E:\\Microsoft VS Code\\Code.exe\" \"%V\""
```

