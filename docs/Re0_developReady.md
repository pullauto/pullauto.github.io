---
layout: post
title: "Re0开发准备"
reward: true
comments: true
tags: 
	- web
	- 开发工具
---



##### 安装[node](https://nodejs.org/zh-cn/download/)

##### npm安装淘宝源

```dart
使用cnpm命令代替npm
npm install -g cnpm --registry=https://registry.npmmirror.com
或者修改npm的源
npm config set registry https://registry.npmmirror.com

查看版本：npm(cnpm) --version
查看源，可以看到设置过的所有的源：npm(cnpm) config get registry
```

npm install 模块名 [-g] 的安装语句时，会将安装的模块安装到【C:\Users\用户名\AppData\Roaming\npm】路径中

<!-- more -->

##### 安装yarn

```
npm install -g yarn
```



##### yarn安装淘宝源

```dart
修改yarn的源
yarn config set registry https://registry.npmmirror.com -g 
```
##### 安装vue3脚手架
```
npm install -g @vue/cli   安装最新的脚手架
vue create project-name   创建项目
```


##### 推荐工具

- [VScode](https://code.visualstudio.com/Download)  [HbuilderX](https://www.dcloud.io/hbuilderx.html)编码工具

  **vscode改变扩展安装地址**：

  ```
  "VS Code（安装地址）" --extensions-dir "（扩展安装地址）
  
  扩展地址不要放在vscode安装目录，更新后会消失
  
  例如："D:\Program Files\Microsoft VS Code\Code.exe" --extensions-dir "D:\Program Files\VSCode_extensions"
  ```

- [utools](https://u.tools/) 内网穿透，本地搜索工具

- [Git](https://www.git-scm.com/downloads) 代码管理工具

- [天若OCR](http://ocr.tianruo.net/) 识图工具

- [Watt Toolkit](https://github.com/BeyondDimension/SteamTools) github加速，微软商店可下

- [SwitchHosts](https://github.com/oldj/SwitchHosts) dns工具，github加速

  - 配合github520实现实时更新github的ip
  - ipconfig /flushdns 刷新dns缓存

- [Snipaste](https://zh.snipaste.com/download.html) 贴图，截图，取色工具

- [Pxcook](https://www.fancynode.com.cn/pxcook/) 自动标注psd文件px的工具

- [postman](https://www.postman.com/downloads/) 接口调试工具

- [WampServer](https://sourceforge.net/projects/wampserver/) 本地服务   [官网](https://www.wampserver.com/)

- [仿站小工具](https://smalltool.github.io/) 

- [谷歌访问助手](/assets/files/谷歌访问助手.zip)

