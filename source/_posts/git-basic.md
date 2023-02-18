---
layout: post
title: "git基本命令"
date: 2020-02-10 9:00
reward: true
comments: true
tags: 
	- git
	- web
---



##### 基础命令

git init 初始化一个Git仓库
git add <file>将文件添加到暂存区，可反复多次使用，添加多个文件
git commit -m <message> 将暂存区的所有文件提交到仓库中，并附加注释（说明）

cat  <file> 查看文件内容
git status

<!--more-->

##### 基本配置

```
# 配置用户名
git config --global user.name "name"
# 配置邮箱
git config --global user.email "name@mail.com"
#生成ssh密钥对
ssh-keygen -t rsa -C "name@mail.com"
#进入目录,查看生成的SSH密钥
cd C:\Users\Administrator\.ssh
#查看公钥和私钥
cat ~/.ssh/id_rsa.pub
```

##### 版本命令

git last 		最后一次提交信息
git log 		查看日志（提交历史）
git log --pretty=oneline
git reflog 	查看命令历史
git reset --hard <commit id> 	回退到某个版本，抛弃<commit id>之后的版本。
git reset --hard HEAD^		 (HEAD^^)回退到上一个(上上个)版本

git push -f    	强制推送，reset后使用

##### 工作区>暂存区>仓库


Git管理的文件分为：工作区，版本库，版本库又分为暂存区stage和暂存区分支master(仓库)

git status 命令查看哪些文件处于什么状态。

git add把文件从工作区>>>>暂存区，git commit把文件从暂存区>>>>仓库，

##### git diff用来比较文件之间的不同

（1）git diff：当工作区有改动，临时区为空，diff的对比是“工作区与最后一次commit提交的仓库的共同文件”；当工作区有改动，临时区不为空，diff对比的是“工作区与暂存区的共同文件”。

（2）git diff --cached 或 git diff --staged：显示暂存区(已add但未commit文件)和最后一次commit(HEAD)之间的所有不相同文件的增删改(git diff --cached和git diff –staged相同作用)

（3）git diff HEAD：显示工作目录(已track但未add文件)和暂存区(已add但未commit文件)与最后一次commit之间的的所有不相同文件的增删改。

（3.1）git diff HEAD~X或git diff HEAD^^^…(后面有X个^符号，X为正整数):可以查看最近一次提交的版本与往过去时间线前数X个的版本之间的所有同(3)中定义文件之间的增删改。
git diff用来比较文件之间的不同（end）

git add的反向命令git checkout，撤销工作区修改，即把暂存区最新版本转移到工作区，

git commit的反向命令git reset HEAD，就是把仓库最新版本转移到暂存区.

##### 撤销修改

git checkout -- file 丢弃工作区的修改
git reset HEAD <file>把暂存区的修改撤销掉,重新放回工作区
最新版git已经使用git restore 代替了原来的reset和checkout命令了

##### 删除文件

rm <file> 删除工作区的文件
git rm <file>  删除工作区文件，并放入暂存区
git rm -f <file> 删除工作区已更改文件，并放入暂存区
git rm --cached <file>删除暂存区文件

##### 创建合并分支

git branch <name>：创建分支
git checkout <name>：或 git switch <name>切换分支
git checkout -b <name>：或 git switch -c <name>创建+切换分支
git merge <name>：合并某分支到当前分支
git branch -d <name>：删除分支

##### 标签相关命令

git tag查看所有标签
git tag <name>打一个新标签
git show <tagname>查看标签信息
git tag -a <tagname> -m "<message>" 创建带说明的标签
        用-a指定标签名，-m指定说明文字

git tag -d <tagname> 删除本地标签
git push origin :refs/tags/<tagname> 删除一个远程标签
git push origin <tagname> 推送某个标签到远程
git push origin --tags 推送未推送过的全部本地标签到远程



##### gitignore文件配置

```
.gitignore  作用于从来没有被 Git 记录过的文件
 git add -f <file> 可强制添加文件
```



#### 配置语法：

以斜杠“/”开头表示目录；
以星号“*”通配多个字符；
以问号“?”通配单个字符
以方括号“[]”包含单个字符的匹配列表；
以叹号“!”表示不忽略(跟踪)匹配到的文件或目录；

```
###忽略文件
filename.后缀  #忽略某个文件
*.cs       # 忽略所有 .cs 结尾的文件
!ABC.cs    # 但 ABC.cs 除外
/BLL       # 仅仅忽略项目根目录下的 BLL 文件，不包括 subdir/BLL
build/     # 忽略 build/ 目录下的所有文件
doc/*.txt  # 会忽略 doc/notes.txt 但不包括 doc/server/arch.txt

*          # 忽略全部
!/ch01/    # 不忽略的文件夹

!*.c       # 不忽略的文件
!*.h
!*.cpp
!*.md
!*.txt

```


git GUI汉化：https://github.com/stayor/git-gui-zh



#### git小技巧

```
git clone -b <branchName> <Library-link>  克隆单个分支
```

