---
layout: post
title: "jquery基础"
reward: true
comments: true
tags: 
	- web
	- jquery
---

#### jQuery HTML

<hr/>

#### jQuery DOM 操作

##### 设置内容和属性

**DOM = Document Object Model（文档对象模型）**

- **text()** - 设置或返回所选元素的文本内容
- **html()** - 设置或返回所选元素的内容（包括 HTML 标签）
- **val()** - 设置或返回表单字段的值

##### 获取属性 - attr()

获得链接中 href 属性的值：

$("#runoob").attr("href")



**attr** 和 **prop** 的区别介绍：

对于 HTML 元素本身就带有的固有属性，在处理时，使用 **prop** 方法。

对于 HTML 元素我们自己自定义的 DOM 属性，在处理时，使用 **attr** 方法。

实例 1：

```
<a href="https://www.runoob.com" target="_self" class="btn">菜鸟教程</a>
```

这个例子里 **<a>** 元素的 DOM 属性有: **href、target** 和 **class**，这些属性就是 **<a>** 元素本身就带有的属性，也是 W3C 标准里就包含有这几个属性，或者说在 IDE 里能够智能提示出的属性，这些就叫做固有属性。处理这些属性时，建议使用 **prop** 方法。

```
<a href="#" id="link1" action="delete" rel="nofollow">删除</a>
```

这个例子里 **<a>** 元素的 DOM 属性有: **href、id** 和 **action**，很明显，前两个是固有属性，而后面一个 **action** 属性是我们自己自定义上去的，**<a>** 元素本身是没有这个属性的。这种就是自定义的 DOM 属性。处理这些属性时，建议使用 **attr** 方法。





##### 设置内容和属性

> $(*selector*).toggle(*speed,callback*);

可选的 speed 参数规定隐藏/显示的速度，可以取以下值："slow"、"fast" 或毫秒。

可选的 callback 参数是隐藏或显示完成后所执行的函数名称。

> css({"*propertyname*":"*value*","*propertyname*":"*value*",...});

- addClass() - 向被选元素添加一个或多个类
- removeClass() - 从被选元素删除一个或多个类
- toggleClass() - 对被选元素进行添加/删除类的切换操作
- css() - 设置或返回样式属性

##### 添加元素

- append() - 在被选元素的结尾插入内容
- prepend() - 在被选元素的开头插入内容
- after() - 在被选元素之后插入内容
- before() - 在被选元素之前插入内容
  - append/prepend 是在选择元素内部嵌入。
  - after/before 是在元素外面追加。
  - 通过 after() 和 before() 方法添加若干新元素

##### 删除元素

- remove() - 删除被选元素（及其子元素）

  -  接受一个参数过滤被删除的元素
- empty() - 从被选元素中删除子元素

