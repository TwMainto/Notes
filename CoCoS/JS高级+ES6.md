[TOC]



### 数据类型

值类型：	number	string	boolean	undefined	null

引用类型：object	arrary	function

对象：

多个数据(属性)的集合

用来保存多个数据的容器

对象的 key 一定是String 如果不是 js 会自动进行 toString 操作

#### 函数

1. 具有特定功能的n条语句的封装体
2. 只有函数是可执行的，其他类型的数据是不可执行的
3. 函数也是对象

函数声明：

```javascript
function fun(){
	console.log("声明一个函数")
}
```

表达式：

```
var fun2 = function () {
	console.log ("声明一个变量把一个函数对象赋值给他。")
}
```

##### 函数调用方式：

##### 函数自调用 === window.函数调用

###### 回调函数 callback 事件的回调 定时器的回调函数

##### 构造函数 -------- 通过 new 生成实例对象

##### call,apply 	改变函数的 this 指向

#### IIFE	

1. 只执行一次
2. 代码执行到函数位置
3. 内部的数据是私有的



Promise

Promise 是什么 ？

​	构造函数，用来生成promise实例对象，代表了未来某个时间将要发生的事件(通常是一个异步操作)

​	有了promise对象，可以将异步操作以同步的流程表达出来。

promise对象有三个状态  ：

​					 