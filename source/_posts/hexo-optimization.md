---
layout: post
title: "hexo优化"
date: 2020-04-12 9:00
reward: true
comments: true
tags: 
	- hexo
---

#### 部署发布

hexo提供了一键部署功能，通过简单的配置能够一键部署到网站服务器上。

在hexo的根目录中安装 `hexo-deployer-git` 插件

```
npm install hexo-deployer-git --save
```

然后修改根目录**_config.xml** 文件中的

```
deploy:
  type: git       //部署类型  
  repo:git@github.com:pullauto/pullauto.github.io.git      //Repository地址
  branch:master       //分支名称
  message: (自定义提交信息,默认为Site updated: {{ now('YYYY-MM-DD HH:mm:ss') }})
```

<!--more-->

使用以下命令部署你的博客

```
hexo deploy   或   hexo d
```


#### 备份博客

在hexo的根目录中安装 `hexo-git-backup` 插件

```
npm install hexo-git-backup --save
```

然后在根目录**_config.xml** 文件中添加

```
backup:
    type: git
    message: 自定义提交信息
    repository:
       github: git@github.com:pullauto/pullauto.github.io.git,blog-backup
					                                   备份仓库，分支
```
使用以下命令备份你的博客
```
hexo backup   或   hexo b
```



#### 配置基本信息

在根目录下的_config.xml中修改
```
title	网站标题
subtitle	网站副标题
description	网站描述
author	作者名
language	网站语言
timezone	网站使用的时区
url	     网站url
root	 网站根目录
```



东西比较多，持续更新

参考：

[hexo-git-backup](https://github.com/coneycode/hexo-git-backup) 