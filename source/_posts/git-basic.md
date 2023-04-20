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

git init 初始化一个 Git 仓库
git add <file>将文件添加到暂存区，可反复多次使用，添加多个文件
git commit -m <message> 将暂存区的所有文件提交到仓库中，并附加注释（说明）

cat <file> 查看文件内容
git status

<!--more-->


##### 常用命令

```
git branch 查看本地分支（*号绿色高亮就是所在分支）
git branch -a 查看远程分支

    删除某个分支之前要先切换到别的分支
git checkout branchname   切换分支
git branch -d branchname  删除本地分支
git branch -D branchname  删除不了可以强制删除
git push origin --delete branchname  删除远程分支(慎用)

git branch -m oldBranchName newBranchName修改本地分支名称
git push --delete origin oldBranchName将本地分支的远程分支删除
git push --set-upstream origin newBranchName将改名后的本地分支推送到远程，并将本地分支与之关联

git merge <branch>合  并分支 

```

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

git last 最后一次提交信息
git log 查看日志（提交历史）
git log --pretty=oneline
git reflog 查看命令历史
git reset --hard <commit id> 回退到某个版本，抛弃<commit id>之后的版本。
git reset --hard HEAD^ (HEAD^^)回退到上一个(上上个)版本

git push -f 强制推送，reset 后使用

##### 工作区>暂存区>仓库

Git 管理的文件分为：工作区，版本库，版本库又分为暂存区 stage 和暂存区分支 master(仓库)

git status 命令查看哪些文件处于什么状态。

git add 把文件从工作区>>>>暂存区，git commit 把文件从暂存区>>>>仓库，

##### git diff 用来比较文件之间的不同

（1）git diff：当工作区有改动，临时区为空，diff 的对比是“工作区与最后一次 commit 提交的仓库的共同文件”；当工作区有改动，临时区不为空，diff 对比的是“工作区与暂存区的共同文件”。

（2）git diff --cached 或 git diff --staged：显示暂存区(已 add 但未 commit 文件)和最后一次 commit(HEAD)之间的所有不相同文件的增删改(git diff --cached 和 git diff –staged 相同作用)

（3）git diff HEAD：显示工作目录(已 track 但未 add 文件)和暂存区(已 add 但未 commit 文件)与最后一次 commit 之间的的所有不相同文件的增删改。

（3.1）git diff HEAD~X 或 git diff HEAD^^^…(后面有 X 个^符号，X 为正整数):可以查看最近一次提交的版本与往过去时间线前数 X 个的版本之间的所有同(3)中定义文件之间的增删改。
git diff 用来比较文件之间的不同（end）

git add 的反向命令 git checkout，撤销工作区修改，即把暂存区最新版本转移到工作区，

git commit 的反向命令 git reset HEAD，就是把仓库最新版本转移到暂存区.

##### 撤销修改

git checkout -- file 丢弃工作区的修改
git reset HEAD <file>把暂存区的修改撤销掉,重新放回工作区
最新版 git 已经使用 git restore 代替了原来的 reset 和 checkout 命令了

##### 删除文件

rm <file> 删除工作区的文件
git rm <file> 删除工作区文件，并放入暂存区
git rm -f <file> 删除工作区已更改文件，并放入暂存区
git rm --cached <file>删除暂存区文件

##### 创建合并分支

git branch <name>：创建分支
git checkout <name>：或 git switch <name>切换分支
git checkout -b <name>：或 git switch -c <name>创建+切换分支
git merge <name>：合并某分支到当前分支
git branch -d <name>：删除分支

##### 标签相关命令

git tag 查看所有标签
git tag <name>打一个新标签
git show <tagname>查看标签信息
git tag -a <tagname> -m "<message>" 创建带说明的标签
用-a 指定标签名，-m 指定说明文字

git tag -d <tagname> 删除本地标签
git push origin :refs/tags/<tagname> 删除一个远程标签
git push origin <tagname> 推送某个标签到远程
git push origin --tags 推送未推送过的全部本地标签到远程

##### git 提交代码规范

```
feat： 新增功能（feature）
fix： 修复补丁（bug）
docs：修订文档，如 Readme, Change Log, Contribute 等
refactor：代码重构，未新增任何功能和修复任何 bug
style： 仅调整空格、格式缩进等（不改变代码逻辑的变动）
perf：优化相关，改善性能和体验的修改
test：测试用例的增加/修改
chore：非 src 和 test 的修改
merge：合并分支或冲突等
revert： 回滚到上一个版本
build：改变构建流程，新增依赖库、工具等（例如 webpack、maven 修改）
ci：自动化流程配置修改

```

##### .gitignore 文件配置

```
.gitignore  作用于从来没有被 Git 记录过的文件
 git add -f <file> 可强制添加文件
```

#### 配置语法：

以斜杠“/”开头表示目录；
以星号“\*”通配多个字符；
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

git GUI 汉化：https://github.com/stayor/git-gui-zh

#### git 小技巧

```
git clone -b <branchName> <Library-link>  克隆单个分支
```
