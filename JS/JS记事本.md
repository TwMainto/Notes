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

### 数组操作方法

| `push()`    | 从数组后面添加，可以一次性添加多个(需要添加的值)             |
| ----------- | ------------------------------------------------------------ |
| `pop()`     | 从数组后面删除，只删除第一个值(无参数)                       |
| `unshift()` | 从数组前面添加，可以一次性添加多个(需要添加的值)             |
| `shift()`   | 从数组前面删除，只删除第一个值(无参数)                       |
| `join()`    | 将数组的元素组成一个字符串，以方法的参数为分隔符，该方法只有一个参数 |
| `map()` | 循环遍历数组中的每个元素，并且返回一个数组，参数：需要执行的方法体。 |





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

#### JSON

| [JSON.parse()](https://www.runoob.com/js/javascript-json-parse.html) | 用于将一个 JSON 字符串转换为 JavaScript 对象。 |
| ------------------------------------------------------------ | ---------------------------------------------- |
| [JSON.stringify()](https://www.runoob.com/js/javascript-json-stringify.html) | 用于将 JavaScript 值转换为 JSON 字符串。       |

new Date()

```javascript
var oDay = new Date(); 
oDay.getFullYear(); //完整的年份
oDay.getMonth(); //当前的月份(0-11,0代表1月) 获取当前的月份是oDay.getMonth()+1;   
oDay.getDate(); //当前的日(1-31) 
oDay.getDay(); //当前的星期X(0-6,0代表星期天) 
oDay.getTime(); //当前的时间(从1970.1.1开始的毫秒数) 
oDay.getHours(); //当前的小时数(0-23) 
oDay.getMinutes(); //当前的分钟数(0-59) 
oDay.getSeconds(); //当前的秒数(0-59) 
oDay.getMilliseconds(); //当前的毫秒数(0-999) 
oDay.toLocaleDateString(); //当前的日期 
var oTime=oDay.toLocaleTimeString(); //当前的时间  <br>oDay.toLocaleString( ); //日期与时间 
```

#### 箭头函数

优点： 使代码更加简洁，不会绑定this 。(因为箭头函数不会绑定 this 所有可以用他来写一些不需要 this 的函数)

注意点：

（1）函数体内的`this`对象，就是定义时所在的对象，而不是使用时所在的对象。

（2）不可以当作构造函数，也就是说，不可以使用`new`命令，否则会抛出一个错误。

（3）不可以使用`arguments`对象，该对象在函数体内不存在。如果要用，可以用 `rest` 参数代替。

（4）不可以使用`yield`命令，因此箭头函数不能用作 `Generator` 函数。

```javascript
const arr = [0,"a",1,"b",2,"c",3,"d",4]                                                           │
        cc.log("删除第一个值 返回删除的值 ... ",arr.shift());                                           
        cc.log("反转数组项的顺序 ... ",arr.reverse());                                                 
        cc.log("排序 ... ",arr.sort());                                                               
        cc.log("将参数添加到原数组中 返回新的数组 ... ",arr.concat(1,2,[[3,4,5]]));                     
        // 多个参数箭头函数                                                                           
        var funcMore = (a,b,c) => cc.log("箭头函数 ... ",a,b,c);                                     
        // 单个参数箭头函数                                                                           
        var funcOne = a => cc.log("单个参数的箭头函数 ... ",a);                                       
        // 没有参数箭头函数                                                                           
        var funcNo = () => cc.log("没有参数的箭头函数 ... ");                                         
        funcMore(1,2,3);                                                                             
        cc.log("箭头函数计算 ... ",funcName(8));                                                       
        funcOne(4);                                                                                   
        funcNo(); 
```



#### 解构赋值(ES6)



#### 默认参数值

JS 中允许在没有值或者 `undefined`被传入是使用默认形参

```javascript
var test = (a, b = 3) => a*b
```



#### JavaScript  实例代码

```javascript
//邮箱表单验证
function validateForm(){
  var x=document.forms["myForm"]["email"].value;
  var atpos=x.indexOf("@");
  var dotpos=x.lastIndexOf(".");
  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
    alert("不是一个有效的 e-mail 地址");
    return false;
  }
}

// 把一个数组转换为所有元素都是奇数，并且使用三元表达式和箭头函数
var arrJi = arrOne.map((arr) => {return arr % 2 === 0 ? arr +1 : arr}); 

//冒泡排序
x = findMax(1, 123, 500, 115, 44, 88);
 
function findMax() {
    var i, max = arguments[0];
   
    if(arguments.length < 2) return max;
 
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

//cocos 中实现计时器
startTime() {
        var self = this;
        var today = new Date();
        this.clock.getComponent(cc.Label).string = String(today);
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = this.checkTime(m);
        s = this.checkTime(s);
        setTimeout(function () {
            self.startTime();
        }, 1000)
    },
    
    checkTime(i) {
        if (i<10) {
            i = "0" + i;
        }
        return i;
    },
```



























































