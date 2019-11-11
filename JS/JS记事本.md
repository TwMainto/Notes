[TOC]



### 常用方法：

isNaN(value):		isNaN() 函数用于检查其参数是否是非数字值。如果参数值为 NaN 或字符串、对象、undefined等非数字值则返回 true, 否则返回 false。



### JS语句标识符

| break        | 用于跳出循环。                                               |
| ------------ | ------------------------------------------------------------ |
| catch        | 语句块，在 try 语句块执行出错时执行 catch 语句块。           |
| continue     | 跳过循环中的一个迭代。                                       |
| do ... while | 执行一个语句块，在条件语句为 true 时继续执行该语句块。       |
| for          | 在条件语句为 true 时，可以将代码块执行指定的次数。           |
| for ... in   | 用于遍历数组或者对象的属性（对数组或者对象的属性进行循环操作）。 |
| function     | 定义一个函数                                                 |
| if ... else  | 用于基于不同的条件来执行不同的动作。                         |
| return       | 退出函数                                                     |
| switch       | 用于基于不同的条件来执行不同的动作。                         |
| throw        | 抛出（生成）错误 。                                          |
| try          | 实现错误处理，与 catch 一同使用。                            |
| var          | 声明一个变量。                                               |
| while        | 当条件语句为 true 时，执行语句块。                           |

js会忽略多余的空格，我可以添加空格来增加代码的可读性，但是对本身代码不产生影响。

**值类型(基本类型)**：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol。

**引用数据类型**：对象(Object)、数组(Array)、函数(Function)。

#### 全局变量

#### 转义符  \ 英文反斜杠

| \\'  | 单引号      |
| ---- | ----------- |
| \\"  | 双引号      |
| \\\  | 反斜杠      |
| \n   | 换行        |
| \r   | 回车        |
| \t   | tab(制表符) |
| \b   | 退格符      |
| \f   | 换页符      |

String(字符串)方法

| charAt()            | 返回指定索引位置的字符                                       |
| ------------------- | ------------------------------------------------------------ |
| charCodeAt()        | 返回指定索引位置字符的 Unicode 值                            |
| concat()            | 连接两个或多个字符串，返回连接后的字符串                     |
| fromCharCode()      | 将 Unicode 转换为字符串                                      |
| indexOf()           | 返回字符串中检索指定字符第一次出现的位置                     |
| lastIndexOf()       | 返回字符串中检索指定字符最后一次出现的位置                   |
| localeCompare()     | 用本地特定的顺序来比较两个字符串                             |
| match()             | 找到一个或多个正则表达式的匹配                               |
| replace()           | 替换与正则表达式匹配的子串                                   |
| search()            | 检索与正则表达式相匹配的值                                   |
| slice()             | 提取字符串的片断，并在新的字符串中返回被提取的部分           |
| split()             | 把字符串分割为子字符串数组                                   |
| substr()            | 从起始索引号提取字符串中指定数目的字符                       |
| substring()         | 提取字符串中两个指定的索引号之间的字符                       |
| toLocaleLowerCase() | 根据主机的语言环境把字符串转换为小写，只有几种语言（如土耳其语）具有地方特有的大小写映射 |
| toLocaleUpperCase() | 根据主机的语言环境把字符串转换为大写，只有几种语言（如土耳其语）具有地方特有的大小写映射 |
| toLowerCase()       | 把字符串转换为小写                                           |
| toString()          | 返回字符串对象值                                             |
| toUpperCase()       | 把字符串转换为大写                                           |
| trim()              | 移除字符串首尾空白                                           |
| valueOf()           | 返回某个字符串对象的原始值                                   |

### 循环

```javaScript
for (var i=0;i<cars.length;i++)
{ 
    document.write(cars[i] + "<br>");
}
```

**Break 和 Continue** break 语句用于跳出循环。continue 用于跳过循环中的一个迭代。 break和continue一起用必须要用else if 。

typeof 

```javascript
typeof "John"                // 返回 string
typeof 3.14                  // 返回 number
typeof false                 // 返回 boolean
typeof [1,2,3,4]             // 返回 object
typeof {name:'John', age:34} // 返回 object
```

#### JavaScript 简单的表单验证

```
function validateForm(){
  var x=document.forms["myForm"]["email"].value;
  var atpos=x.indexOf("@");
  var dotpos=x.lastIndexOf(".");
  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
    alert("不是一个有效的 e-mail 地址");
    return false;
  }
}
```

#### JSON

| [JSON.parse()](https://www.runoob.com/js/javascript-json-parse.html) | 用于将一个 JSON 字符串转换为 JavaScript 对象。 |
| ------------------------------------------------------------ | ---------------------------------------------- |
| [JSON.stringify()](https://www.runoob.com/js/javascript-json-stringify.html) | 用于将 JavaScript 值转换为 JSON 字符串。       |































































