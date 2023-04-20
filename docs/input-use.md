---
layout: post
title: "input常用"
reward: true
comments: true
tags: 
	- web
	- input
---

`<datalist>`标签，用来定义选项列表，与`input`元素配合使用钙元素，来定义`input`可能的值。

`datalist`及其选项不会被显示出来，他仅仅是合法的输入列表值。

```html
<input id="fruits" list="fruit" />
<datalist id="fruit">  
    <option value="apple">  <option value="orange">  <option value="banana">
</datalist>
```

`label` 标签来定义表单控制间的关系，当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。

```html
<label for="Name" id="redstar">Number:</label>    //for和id绑定
<input type=“text“ name="Name" id="Name"/>
```

```html
<style>
    redstar::before{content:'*';color:red;  //label标签前加红色的星星
</style>
```

