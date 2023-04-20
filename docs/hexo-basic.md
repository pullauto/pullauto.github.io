---
layout: post
title: "hexo基本使用"
date: 2020-04-10 9:36
reward: true
comments: true
tags: 
	- hexo
---

#### 介绍

是一个快速、简洁且高效的博客框架。Hexo 使用 [Markdown](http://daringfireball.net/projects/markdown/)（或其他渲染引擎）解析文章，在几秒内，即可利用靓丽的主题生成静态网页。即把用户的markdown文件，按照指定的主题解析成静态网页。

<!--more-->



#### 安装hexo

安装使用hexo之前需要先安装Node.js和Git，当已经安装了Node.js和npm(npm是node.js的包管理工具)，可以通过以下命令安装hexo

```html
npm install -g hexo-cli
```

用`hexo -v`查看一下版本

可以通过以下命令查看主机中是否安装了**node.js**和**npm**

```
node -v	    #检查是否安装了node.js
npm -v		#检查是否安装了npm
```

新建一个文件夹（**blog**）进入 初始化一下hexo

```
hexo init
```
这个**blog**可以自己取什么名字都行，然后

```
npm install       #安装依赖包
```
完成后会出现几个文件夹
```
.
├── node_modules    #依赖包
├── _config.yml     #博客的配置文件
├── package.json
├── scaffolds       #文章的一些模板
├── source          #用来存放你的文章,资源
|   └── _posts      #存放你的文章
└── themes			#主题
```

#### hexo基本命令

**（1）` hexo g`或`$ hexo generate`**
 该命令执行后在`hexo`站点根目录下生成`public`文件夹

**（2）` hexo clean`**
 把（1）中的`public`文件夹，和db.json数据删除

**（3）` hexo s`或`$ hexo server`**
 启动服务预览

**（4）` hexo d`或`$ hexo deploy`**
 部署站点，在本地生成`.deploy_git`文件夹，并将编译后的文件上传至 GitHub。

**（5）` hexo new [layout] <title>`**
 例如：`$ hexo new photo “my-first-blog”`
 上述指令执行时，Hexo 会尝试在 scaffolds 中寻找photo.md布局，若找到，则根据该布局新建文章；若未找到或指令中未指定该参数，则使用post.md新建文章。新建文章的名称在_config.yml中配置。

**（6）删除文章**
 只需在本地把`source/_posts`文件夹下的文章源文件删除后，执行以下命令重新部署即可。

#### _config.yml的配置

[_config.yml配置](https://hexo.io/zh-cn/docs/configuration)官网已经比较详细了，不在多说