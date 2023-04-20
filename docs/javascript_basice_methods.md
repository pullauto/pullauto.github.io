JS中常用的方法总结（算法，js编程题必备）

#### 1、数学方法：Math

Math本身就是一个对象, 不需要在通过构造函数去创建, 该对象中集合了很多关于数学运算的方法

> 1、只保留正数部分：`parselnt`
>  2、向上取整，有小数就整数部分加1：`Math.ceil`
>  3、四舍五入： `Math.round`
>  4、向下取整：  `Math.floor`
>  5、获取一个对象的绝对值：`Math.abs`
>  6.I π`：Math.P`
>  7、求几个数的最大数：`Math.max()`
>  8、求几个树的最小树：`Math.min`
>  9、随机数 (随机生成0 ~1之间的数)：`Math.random`

#### 2、字符串方法

> 1、返回指定索引的字符：`charAt`
>  2、字符串拼接：`concat`
>  3.取从第几位到指定长度的字符串：`substr`
>  4.取介于两个指定下标之间的字符串：`substring`
>  5.返回一个新的数组,介于两个指定下标之间的字符串：slice
>  6.返回子字符串的位置(没有找到返回-1)：首次的位置：`IndexOf`、最后的位置：`lastIndexOf`
>  7、删除头尾的空格：`trim()`
>  8.检索指定的值：`match()`
>  9.返回指定的第一个匹配项的索引(未检测到返回-1)：`search()`
>  10.替换现有字符串：`.replace()`
>  11.把字符串分割成字符串数组：`split(分隔符)`
>  12.把两个字符串连接起来，返回的值是一个副本：**concat(a, b)**

#### 3、数组相关

> 1、返回原数组指定两个下标之间的新数组：`slice()`
>  2、删除 插入 替换数组 【参数不同】 ：`splice()`
>  3、将参数添加到数组的最后，返回新数组的长度：`push()`
>  4.删除数组的最后一个元素，返回被删除的值(减少数组的长度)：`pop()`
>  5.向数组的开头添加一个或多个的元素，并返回新的长度：`unshift()`
>  6.删除数组的第一个参数，数组的长度减1：`shift()`
>  7.按指定的参数对数组进行排序，返回的值是经过排序后的数组： `sort()
>  ` 8.将数组中的元素进行反转，倒序显示：`reverse()`
>  9.用分隔符将数组的元素组成一个字符串：`join()`
>  10、从数组的开头向后查找，（接受两个参数，要查找的项和查找起点的位置索引）：`indexOf()`
>  11、从数组末尾开始获取：`lastIndexof()`
>  12、遍历数组：`for`
>  13、对数组的每个元素执行一次提供的函数：`foeEach()`
>  15、对数组的每一项运行给定的函数，返回没戏函数调用的结果组成的数组：`map()`
>  16.通过检查指定数组中符合条件的所有元素（不会改变原始数组）：`filter()`
>  17.把数组转换成字符串，每一项用,分割：`toString()`
>  18.`every和some`
>  every 是所有函数的每个回调都返回 true 的时候才会返回 true，当遇到 false 的时候终止执行，返回 false。
>  some 函数是存在有一个函数返回 true 的时候终止执行并返回 true，否则返回 false。
>  19.reduce(function(v1,v2),value) 和 reduceRight(functio(v1,v2),value)
>  遍历数组，调用回调函数，将数组元素组合成一个值，reduce 从索引最小值开始，reduceRight 反向，方法有两个参数（回调函数，把两个值合成一个，返回结果；value,一个初始值，可选）
>  20.判断一个对象是否为数组：isArray()

#### 4、JS获取DOM元素的方法

注意：原生JS选取DOM元素比使用Jquery类库选取要快很多

> ID:document.getElementById(‘myid’);
>  class：document.getElementsByClassName(‘myclass’)[0];
>  TagName： document.getElementsByTagName(‘mydiv’)[0];
>  标签： document.getElementsByName(‘myname’)[0];

JS修改CSS样式

> document.getElementById(‘myid’).style.display = ‘none’;

JS修改CLASS属性

> 一个class属性：document.getElementById(‘myid’).className = ‘active’;
>  多个class用空格分开：document.getElementById(‘myid’).className = ‘active div-1’;
>  改元素的所有class属性 使用空格：document.getElementById(‘myid’).className = ‘’;

JS修改文本：

> document.getElementById(‘myid’).innerHTML = ‘123’;

js创建元素并向其中追加文本

> var newdiv = document.createElement(‘div’);
>  var newtext = document.createTextNode(‘123’);
>  newdiv.appendChild(newtext);
>  document.body.appendChild(newdiv);

同理：removeChild()移除节点，并返回节点

cloneNode() 复制节点
 insertBefore() 插入节点（父节点内容的最前面）

注意：insertBefore() 有两个参数，第一个是插入的节点，第二个是插入的位置

#### 5、追加元素的几种方法

> 1.在父级最前面追加一个子元素：prepend()
>
> 2.在父级最后面追加一个子元素：append()
>  3.将子元素追加到父级的最前面：prependTo()
>  4.将子元素追加到父级的最后：appendTo()
>  5.在当前元素之前追加（是同级关系）：before()
>  6.在当前元素之后追加（是同级关系）：after()
>  7.将元素追加到指定对象的前面（是同级关系）：insertBefore()
>  8.将元素追加到指定对象的后面（是同级关系）：insertAfter()
>  9.在节点的最后追加子元素：appendChild()

#### 6、JS返回所有子节点对象childNodes

> firstChild 返回第一个子节点
>  lastChild 返回最后一个子节点
>  parentNode 返回父节点对象
>  nextSibling 返回下一个兄弟节点对象
>  previousSibling 返回前一个兄弟节点对象
>  nodeName 返回节点的HTML标记名称

```javascript
var mylist = document.getElementById('myid');
for(var i=0,i<mylist.childNodes.length;i++){
  console.log(mylist.childNodes[i]);
}
复制代码
```

#### 7、对象Object构造方法

> `Object.assign()`将所有可枚举的自身属性的值从一个或多个源对象复制到目标对象。
>  `Object.create()`用指定的原型对象和属性创建一个新对象。
>  `Object.defineProperty()`将给定描述符描述的命名属性添加到对象。
>  `Object.defineProperties()`将给定描述符描述的命名属性添加到对象。
>  `Object.entries()`返回一个包含[key, value]给定对象自己的可枚举字符串属性的所有对的数组。
>  `Object.freeze()`冻结对象。其他代码无法删除或更改其属性。
>  `Object.fromEntries()`从可迭代的[key, value]对中返回一个新对象。（这是的反向  Object.entries）。
>  Object.`getOwnPropertyDescriptor()`返回对象的命名属性的属性描述符。
>  Object.`getOwnPropertyDescriptors()`返回一个包含对象自身所有属性描述符的对象。
>  Object.`getOwnPropertyNames()`返回一个数组，其中包含给定对象自己的所有可枚举和不可枚举属性的名称。
>  Object.`getOwnPropertySymbols()`返回直接在给定对象上找到的所有符号属性的数组。
>  Object.`getPrototypeOf()`返回prototype指定对象的。
>  `Object.is()`比较两个值是否相同。求所有NaN值（不同于“抽象相等比较”和“严格相等比较”）。
>  Object`.isExtensible()`确定是否允许扩展对象。
>  Object`.isFrozen()`确定对象是否冻结。
>  Object.`isSealed()`确定对象是否密封。
>  Object.`keys()`返回一个数组，其中包含给定对象自己的所有可枚举字符串属性的名称。
>  Object`.preventExtensions()`防止对象的任何扩展。
>  Object.`seal()`防止其他代码删除对象的属性。
>  Object`.setPrototypeOf()`设置对象的原型（其内部[[Prototype]]属性）。
>  Object.`values()`返回一个数组，该数组包含与给定对象自己的所有可枚举字符串属性相对应的值。

