---
layout: post
title: "Object常用内置对象"
reward: true
comments: true
tags: 
	- js
---

#### 属性的特性以及内部属性

**javacript 有三种类型的属性**

- **命名数据属性**：拥有一个确定的值的属性。这也是最常见的属性
- **命名访问器属性**：通过getter和setter进行读取和赋值的属性
- **内部属性**：由JavaScript引擎内部使用的属性，不能通过JavaScript代码直接访问到，不过可以通过一些方法间接的读取和设置。比如，每个对象都有一个内部属性[[Prototype]]，你不能直接访问这个属性，但可以通过Object.getPrototypeOf()方法间接的读取到它的值。虽然内部属性通常用一个双吕括号包围的名称来表示，但实际上这并不是它们的名字，它们是一种抽象操作，是不可见的，根本没有上面两种属性有的那种字符串类型的属性

<!-- more -->

##### Object.create(proto[,propertiesObject])

##### Object.defineProperty(obj, key, desc)

对象的定义与赋值的作用就是直接在一个对象上定义一个新属性，或者修改一个已经存在的属性

```js
/**
 *  obj 是需要定义的对象
 *  key 是需要定义的属性名
 *  desc 属性描述符{}
 */
Object.defineProperty(obj, key, desc)
```



##### 属性描述符

通过Object.defineProperty()为对象定义属性，有两种形式，且不能混合使用，分别为数据描述符，存取描述符，下面分别描述下两者的区别：

- ##### 数据描述符 --特有的两个属性（value,writable）

  **value**是 对象的值  key的形式在Object.defineProperty的第二个参数   'name' 

  **writable**: 是否可以修改  默认false

- ##### 存取描述符 --是由一对 getter、setter 函数功能来描述的属性

  **get**：一个给属性提供getter的方法，如果没有getter则为undefined。该方法返回值被用作属性值。默认为undefined。
  **set**：一个给属性提供setter的方法，如果没有setter则为undefined。该方法将接受唯一参数，并将该参数的新值分配给该属性。默认值为undefined

- **数据描述符和存取描述均具有**`enumberable`,`configurable`

  configrable 描述属性是否配置，以及可否删除 

  enumerable 描述属性是否会出现在for in 或者 Object.keys()的遍历中

- ##### 如果描述符中的某些属性被省略，会使用以下默认规则：

 ```
属性名                     默认值
value                   undefined
get                     undefined
set                     undefined
writable                 false
enumberable              false
configurable             false
 ```

结合writable: false 和 configurable: false 就可以创建一个真正的常量属性（不可修改，不可重新定义或者删除）

**Object.preventExtensions(…)**禁止一个对象添加新属性并且保留已有属性

