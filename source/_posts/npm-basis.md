---
layout: post
title: "npm基础知识"
date: 2020-5-3 9:36
reward: true
comments: true
tags: 
	- npm
	- 开发工具
---

- `npm -v` 通过查看版本，看npm是否安装成功

- `npm init` 生成package.json文件  

  - `npm init --yes` 生成默认package.json文件     <!-- more -->

- `npm install <Module Name>-g` 全局安装模块，可以直接在命令行里使用

  - `npm install <Module name>`  使用npm命令安装模块

- `npm list -g` 查看所有全局安装的模块

  - `npm list <Module name>` 查看某个模块的版本号

- `npm -g install npm @5.9.1`（@后跟版本号）这样我们就可以更新npm版本

- `npm install --save <Module name>`       #--save在 package文件的 dependencies节点写入依赖

- `npm install --save-dev <Module name> `      #--save-dev在 package文件的 devDependencies节点写入依赖dependencies：运行时的依赖，发布后，即生产环境下还需要用的模块

  如果vue项目要部署上线，为防止依赖包失效，一般采用–save

#### package.json文件属性

- `name` 包名
- `version`包的版本号
- `description`包的描述。
  ~5.0.3”表示安装5.0.X中最新的版本
  "^5.0.3”表示安装5.X.X中最新的版本homepage·包的官网url 
- `author`包的作者姓名。
- `contributors`包的其他贡献者姓名。
- `dependencies`-依赖包列表。如果依赖包没有安裝，npm会自动将依赖包安装在 node module目录下。
  `repository`-包代码存放的地方的类型，可以是git或swn,gt可在 Github上
- `main` main字段指定了程序的主入口文件， require（' moduleName）就会加载这个文件。这个字段的默认值是模块根目录下面的 index js 
- `keywords`-关键字
- `Dependencies`：生产时的依赖。里面的模块是发布时用的.
- `devDependencies`：开发时的依赖。里面的模块是开发时用的，发布时用不到它比如项目中使用的gup，压缩cSs、 s的模块。这些模块在我们的项目部署后是不需要的