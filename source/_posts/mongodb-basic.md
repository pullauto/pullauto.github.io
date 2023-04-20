---
layout: post
title: "mongodb基础"
reward: true
comments: true
tags: 
	- Server
---
[下载地址](https://www.mongodb.com/try/download/community)

#### 常用命C:\mongodb\bin\mongod --dbpath H:\mongodbdata\data\db	//运行 MongoDB 服务器

```

启动MongoDB服务
net start MongoDB

关闭MongoDB服务
net stop MongoDB

移除 MongoDB 服务
C:\mongodb\bin\mongod.exe --remove
```

MongoDB 创建数据库的语法格式如下：

```
use DATABASE_NAME

查看所有数据库
show dbs

MongoDB 删除数据库的语法格式如下：
db.dropDatabase()

集合删除语法格式
db.collection.drop()

查看所有集合
show collections

创建集合(插入数据会隐式创建)
db.createCollection(name, options)
db.createCollection('集合名')
在 MongoDB 中，你不需要创建集合。当你插入一些文档时，MongoDB 会自动创建集合。

删除集合
db.集合名.drop()
```

CURD

create

```
单增
db.collection.insertOne(<document>,{writeConcern: <document>})
db.users.insertOne({"name":"zhangsan","age":12})
群增
db.users.insertMany([{"name":"wangwu","age":11},{"name":"lisi","age":16}])

update
单改
db.users.updateOne({"name":"lisi"},{"$set":{"age":18}})
db.users.replaceOne({"name":"lisi"},{"age":12})
群该
db.users.updateMany({"name":"wangwu"},{"$set":{"name":"ww",age:"12"}})
Retrieve

单查
db.users.findOne({})
群查
db.users.find({})
delete

单删
db.users.deleteOne({"name":"zhangsan"})
群删
db.users.deleteMany({})
```

## 插入文档

```

```
