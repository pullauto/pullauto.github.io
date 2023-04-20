## CSS 属性选择器 ~=, |=, ^=, $=, *= 的区别

**先上总结:**

**"value 是完整单词"** 类型的比较符号: **~=**, **|=**

**"拼接字符串**" 类型的比较符号: ***=**, **^=**, **$=**

**1.attribute 属性中包含 value:**　

[attribute~=value] 属性中包含独立的单词为 value，例如：

```
[title~=flower]  -->  <img src="/i/eg_tulip.jpg" title="tulip flower" />
```

[attribute*=value] 属性中做字符串拆分，只要能拆出来 value 这个词就行，例如：

```
[title*=flower]   -->  <img src="/i/eg_tulip.jpg" title="ffffflowerrrrrr" />
```

**2.attribute 属性以 value 开头:**

[attribute|=value] 属性中必须是完整且唯一的单词，或者以 **-** 分隔开：，例如：

```
[lang|=en]     -->  <p lang="en">  <p lang="en-us">
```

[attribute^=value] 属性的前几个字母是 value 就可以，例如：

```
[lang^=en]    -->  <p lang="ennn">
```

**3.attribute 属性以 value 结尾:**

```
[attribute$=value] 属性的后几个字母是 value 就可以，例如：
a[src$=".pdf"]
```