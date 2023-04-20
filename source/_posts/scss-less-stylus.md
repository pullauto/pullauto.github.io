---
layout: post
title: "css预处理器"
reward: true
comments: true
tags: 
	- web
	- css
---

##### scss 是sass3.0之后的版本

##### 在vscode中下载easy sass插件,可以自动把scss转为css文件

##### 定义变量

```scss
//scss以$开头
$global-background:#fcfcfc !default; //声明默认变量
$global-background:#fcfcfc;			//声明变量
```

<!-- more -->

##### 父级选择器

用于伪类选择器

&代表了直接父级元素

```scss
.article {
    color:$global-background; 
    &:hover {			//相当于  .article:hover{}
        color:red;
    }
}
```

##### 嵌套语法

直接在父级元素内写子级元素的样式即可,

##### 混用(mixins)复用一段代码

`定义格式:`  @mixin  名称  { 代码 }

```scss
@mixin font { font-size:14px; }
@mixin font($defont) {font-size:$defont;} //为函数传参数。
@mixin font($defont=14px) {font-size:$defont;}//设置参数的默认值
```

`使用格式:`  `@include 混用块名称`  接口   在对应的元素style中写

```scss
.fr {@include font;}
.fr {@include font;}		//不传参则为默认值14px
.fr {@include font(15px);}	//传参
```

##### 模块化

**可以把变量模块放在一个单独的scss文件**

scss文件也可以叫做scss模块

```scss
@import "./varisbles.scss";  //导入模块   引入其他scss文件
```

##### 继承

`使用格式:` @extend   选择器

```scss
.font{font-size:14px;}
.footer{ @extend .font; }
```

##### 站位选择器

%选择器名，通过@extend 去调用，如果不调用，则文件编译后不会出现改该冗余css文件

```scss
%size{ font-size: 14px;}
div{ @extend %size; }
```

##### 函数

sass 内置了很多函数，自己也可以定义函数。以 @function 开始 @return 返回值



```php
//scss 文件
    @function fn($data){
        @return $data/10 + px;
    }
    div{ font-size: fn(80); }						//解析为 css文件div{font-size: 8px;}
```

其他功能
 其他功能包括以下几点

1、运算：对于（数字，颜色，变量）的四则（加减乘除）运算,运算符前后各保留一格空格
 2、if判断：@if可以单独使用，也可以配合@else、@else if 一起使用
 3、三目运算符：if(true,1px,2px)，返回的值是1px,if(false,1px,2px),返回的值是2px
 4、for循环，共有两种写法

 **在 Sass 的 @for 循环中有两种方式：**

```ruby
1、@for $i from <start> through <end>
2、@for $i from <start> to <end>
```

$i 表示变量
 start 表示起始值
 end 表示结束值
 举例说明

```ruby
@for $i from 1 through 3 {
  .item-#{$i} { width: 2em * $i; }
}
```

编译出来的 CSS:

```css
.item-1 {
  width: 2em;
}
.item-2 {
  width: 4em;
}
.item-3 {
  width: 6em;
}
```

再来个 to 关键字的例子：

```ruby
@for $i from 1 to 3 {
  .item-#{$i} { width: 2em * $i; }
}
```

编译出来的 CSS:

```cpp
.item-1 {
  width: 2em;
}
.item-2 {
  width: 4em;
}
//两种写法唯一的区别就是，through包括end这个数，to不包括end这个数。
```

each循环，@each ![var in ,list和map分别表示为list和map类型数据。 @each](https://math.jianshu.com/math?formula=var%20in%20%2Clist%E5%92%8Cmap%E5%88%86%E5%88%AB%E8%A1%A8%E7%A4%BA%E4%B8%BAlist%E5%92%8Cmap%E7%B1%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E3%80%82%20%40each)var in <list>
 项目中经常用到的功能
 变量
 嵌套
 &
 函数：用于移动端页面计算rem或者vw最佳