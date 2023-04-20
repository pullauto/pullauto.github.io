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

- `npm install <Module Name> -g` 全局安装模块，可以直接在命令行里使用

  - `npm install <Module name>`  使用npm命令安装模块

- `npm list -g` 查看所有全局安装的模块

  - `npm list <Module name>` 查看某个模块的版本号

- `npm -g install npm @5.9.1`（@后跟版本号）这样我们就可以更新npm版本

- `npm install --save <Module name>`       #--save在 package文件的 dependencies节点写入依赖

- `npm install --save-dev <Module name> `      #--save-dev在 package文件的 devDependencies节点写入依赖dependencies：运行时的依赖，发布后，即生产环境下还需要用的模块

  如果vue项目要部署上线，为防止依赖包失效，一般采用–save

##### npm切换源

**nrm（npm registry manager）**是npm的镜像管理工具，有时候国外的资源太慢，使用这个就可以快速地在npm源间切换。

```
npm install -g nrm   //全局安装nrm
nrm ls				//查看可选的源,带*的是当前使用的源。
nrm current			//查看当前源。
nrm use taobao		//切换到taobao源
nrm add <registry> <url>	//增加定制的源，，其中registry为源名，url为源的路径。特别适用于添加企业内部的私有源
nrm del <registry>		//删除对应的源。
nrm test <registry>		//测试响应源的响应时间。
```

​			**切换npm包源之后，即可正常使用npm install**

##### yarn 切换源

yarn切换镜像源与npm类似，如果是npm形式安装的yarn，则可以再安装`yrm`，然后使用`yrm`便可与使用`nrm`一样的方式查看、切换源：

```bash
npm install -g yrm	# 安装yrm
yrm ls		# 查看当前可用源
yrm use taobao		# 切换源
```

##### npm包管理器后缀

- **npm install** (没有参数)，在本地`node_modules`文件夹中安装依赖项。默认情况下，`npm install`将安装列为依赖项的所有模块`package.json`。
- **--save**,简写 **-S**; 表示安装到你的当前项目目录下，可以看到在package.json文件的`dependencies`中出现了。**生产环境依赖**
- **--save-dev**，简写 **-D**;表示安装包将出现在您的`devDependencies`。**开发环境依赖**
- **--save-optional**，简写 **-O**; 安装包会出现在您的`optionalDependencies`。**可选环境依赖**
- **--save-prod**，简写**-P**;表示安装包将出现在您的`dependencies`。
- **--no-save**，防止保存到`dependencies`。（这个也很少用）



##### npx

npm 从5.2版开始，增加了 npx 命令，解决的主要问题，就是调用项目内部安装的模块，还有一个就是npx 还能避免全局安装的模块，起到不用全局安装，下载到一个临时目录，使用以后再删除。

所以使用nrm切换镜像源可以是：

```bash
nrm ls		# 查看当前可用的源
nrm use taobao	# 切换源

# 使用 npx可以是以下方式
npx nrm ls
npx nrm use taobao
```


##### package.json文件属性

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