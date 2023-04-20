---
layout: post
title: "docker使用"
date: 2021-02-10 9:00
reward: true
comments: true
tags: 
	- Win
	- Docker
---

[Docker中文社区](https://www.docker.org.cn/index.html)、[Docker中文文档](https://www.kancloud.cn/jingyucloud/docker/216412)

#### Docker 包括三个基本概念:

**镜像（Image）**

Docker的镜像概念类似于虚拟机里的镜像(比如.ISO文件)，是一个只读的模板，一个独立的文件系统，包括运行容器所需的数据，可以用来创建新的容器。

<!--more-->

**容器（Container）**

Docker容器是由Docker镜像创建的运行实例，类似VM虚拟机，支持启动，停止，删除等。
每个容器间是相互隔离的，容器中会运行特定的应用，包含特定应用的代码及所需的依赖文件。
容器就类似与虚拟机中创建好的虚拟机系统,我们所有的操作都是在容器中进行的,我们的程序也是运行在容器中。

**仓库（Repository）**

镜像便于传播,存放各种镜像



**Docker Volume**本质上是容器与主机之间共享的目录或者文件，这样**Docker Volume**中的数据可以在主机和容器中实时同步。

##### 换源

```json
{
  "builder": {
    "gc": {
      "defaultKeepStorage": "20GB",
      "enabled": true
    }
  },
  "experimental": false,
  "features": {
    "buildkit": true
  },
  "registry-mirrors": [
    "https://registry.docker-cn.com",
    "http://hub-mirror.c.163.com",
    "https://docker.mirrors.ustc.edu.cn"
  ]
}
```

其他源介绍：
科大镜像：https://docker.mirrors.ustc.edu.cn/
网易：https://hub-mirror.c.163.com/
七牛云加速器：https://reg-mirror.qiniu.com
Docker中国区官方镜像：https://registry.docker-cn.com
阿里云：https://阿里云镜像服务id.mirror.aliyuncs.com

​	**以下操作都可以在Dockers  Window  中使用**



##### 获取当时所有镜像(docker images)

```powershell
docker image ls
# 或者
docker images
```

##### 拉去镜像(docker pull)

除了使用官方的镜像外,我们还可以在仓库中申请一个自己的账号,保存自己制作的进行,或者拉去使用他人的镜像。

```
##### 官方镜像
docker image pull 镜像名称 
##### 或简写为 
docker pull 镜像名称
##### 比如
docker pull ubuntu
docker pull ubuntu:16.04

##### 个人镜像
docker pull 仓库名称/镜像名称
docker pull xunmi/django

##### 第三方仓库拉去
docker pull 第三方仓库地址/仓库名称/镜像名称
docker pull hub.c.163.com/library/mysql:latest
(默认仓库名为library,所有从官方获取镜像相当于`sudo docker image pull library/镜像名称`)

```

##### 删除镜像(docker rmi)

```
docker image rm 镜像名或镜像ID 或 docker rmi 镜像名或镜像ID
docker image rm hello-world
docker rmi 9e64176cd8a2```
//删除镜像的前提是没有使用这个镜像的容器,如果有需要先删除容器
docker rm: 删除一个或多个 容器
docker rmi: 删除一个或多个 镜像
docker prune: 用来删除不再使用的 docker 对象
```

##### 加载镜像(docker run)

上面我们说过,镜像只是一个只读类型的文件,而我们的环境不可能只是一个这样的文件,所以我们需要把这个镜像加载成我们的环境,也就是让他变成容器。

```
docker run [可选参数] 镜像名 [向启动容器中传入的命令]
```

**常用可选参数	作用**
**-i**	表示以《交互模式》运行容器。
**-d**	会创建一个守护式容器在后台运行(这样创建容器后不会自动登录容器)。
**-t**	表示容器启动后会进入其命令行。加入这两个参数后，容器创建就能登录进去。即分配一个伪终端。
**–name**	为创建的容器命名。(默认会随机给名字,不支持中文字符!!!)
**-v**	表示目录映射关系，即宿主机目录:容器中目录。注意:最好做目录映射，在宿主机上做修改，然后共享到容器上。
**-p**	表示端口映射，即宿主机端口:容器中端口。 比如:-p 8080:80 就是将容器中的80端口,映射到主机中的8080端口
**–network=host**	表示将主机的网络环境映射到容器中，使容器的网络与主机相同。每个 Docker 容器都有自己的网络连接空间连接到虚拟 LAN。使用此命令则会让容器和主机共享一个网络空间。

启动一个系统:

`docker run -i -d -t --name=kali-test kalilinux/kali-rolling`(这里我使用linux的一个发行版kali作为介绍)
可以简写为:

`docker run -idt --name=kali-test kalilinux/kali-rolling`
PS: 如果加载一个我们没有的镜像,docker会自动从官方仓库中进行拉去。

启动一个网站:

```
docker run -dp 8080:80 --name docker-test docker/getting-started
```

如果没有下载docker/getting-started的进行,这里会自动下载
成功启动后,可以在浏览器中输入http://localhost:8080/即可看到如下页面

##### 查看容器(docker ps)

查看容器主要会用到ps命令

```
# 查看当前所有正在运行的容器
docker ps
# 查看当前所有的容器
docker ps -a
# 使用过滤器(除了name外,常用的还可以指定id:id= 、所有停止的容器:status=exited,正在运行的容器:status=running 等)
docker ps -f name=指定的名字
# 显示2个上次创建的容器(2可以改变)
docker ps -n 2
# 显示最新创建的容器（包括所有状态）
docker ps -l
# 仅显示ip
docker ps -q
 # 显示容器大小
docker ps -s
```

##### 启动和关闭容器

```
# 停止容器
docker container stop 容器名或容器id
# 或可简写为
docker stop 容器名或容器id

# 强制关闭容器
docker container kill 容器名或容器id
# 或可简写为
docker kill 容器名或容器id

# 启动容器
docker container start 容器名或容器id
# 或可简写为
docker start 容器名或容器id

```
#stop和kill的区别: stop是关掉一个容器,kill是强行进行关闭

##### 删除容器(docker rm)

```dockerfile
#首先停止这个容器,因为正在运行的容器是无法直接删除。
#docker ps -a,如果发现没有停止,可以使用docker stop停止(STATUS下已Exited开头则是停止的)
# 使用rm删除容器
docker rm 容器名或容器id
# 列如
docker rm docker-test
```
##### 容器制作成镜像

```dockerfile
#镜像可以看作为是一种备份,如果我们后期环境出现了问题,可以还原到早期镜像。
#镜像便于传播,可以让自己的其他设备或他人的重复利用变得更加简单容易。
# 将容器制作成镜像
docker commit 容器名 镜像名
# 镜像打包备份(打包备份的文件会自动存放在当前命令行的路径下,如果想让保存的文件可以打开,可以加.tar后缀)
docker save -o 保存的文件名 镜像名
# 镜像解压
docker load -i 文件路径/备份文件

#使用docker镜像解压即可直接使用环境。
```





#### Docker-Desktop储存路径更改

```
wsl -l --all -v		//查看wsl子系统
```

- docker-desktop：保存的是程序
- docker-desktop-data: 保存的镜像

> 在关闭docker-desktop的情况下再进行操作。

通过wsl命令将这两个子系统进行迁移

##### 备份命令
```
wsl --export docker-desktop docker-desktop.tar
wsl --export docker-desktop-data docker-desktop-data.tar
```
##### 删除命令
```
wsl --unregister docker-desktop
wsl --unregister docker-desktop-data
```
##### 导入命令

```
wsl --import docker-desktop F:\DockerDesktopWSL\docker-desktop docker-desktop.tar

wsl --import docker-desktop-data F:\DockerDesktopWSL\docker-desktop-data docker-desktop-data.tar
++注意: 划重点, 两个子系统文件使用的目录限制不能为同一个目录.
```

