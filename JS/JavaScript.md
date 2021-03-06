

[toc]



### 对象基础

##### 访问对象内容

点表示法		

```javascript
person.age
person.intersets[1]
person.bio()
```

括号表示法 （仅限访问属性）

```javascript
person['age']
person['name']['first']
```

点表示法无法做到使用 变量作为名字，而括号表示法可以。

总结：对象使我们将一些信息安全的锁在了它们自己的包内，防止它们被破坏。

### 面向对象的JavaScript(OOJS)

​	对象可以包含相关的数据和代码，这些代表现实世界模型的一些信息或者功能，或者它特有的一些行为。对象数据（也称为函数）可以结构的储存（封装） 在对象包内（也可以给一个特殊的名字来表示，有时候也叫做命名空间），可以使它容易组织和访问，对象也通常用于储存数据，这样就可以很容易的在网络上传输。

创建对象(OOJS)

```javascript
// 使用构造函数创建对象
function Preson(name){
    this.name = name;
    this.greeting = function(){
        alert('Hi ... ',this.name);
    }
}
// 使用Object 创建对象
var person = new Object();
person.name = 38;
person.greeting = function(){
	alert('Hi ... ',this.name);
}
```

#### 构造函数和对象

​		不像 “经典” 的面向对像的语言，js 从构造函数创建的新实例的特征并非全盘复制，而是通过一个叫做原型链的参考链链接过去的。所以这并非真真的实例，严格的将， js 在对象间使用和其他语言的共享机制不同。

##### 构造函数执行过程：

​		当使用构造函数创建对象，也就是说 new 构造函数() 时， 内部就执行了 new Object() 。将构造函数的作用域给新对象，（ 即 new Object() 创造出来的对象 ）而函数体内的 this 就是代表new Object() 出来的对象执行构造函数内部的代码返回新对象不需要return 也能返回

##### 构造函数使用规则：

1. 函数名首字母大写
2. 通过 this 来给对象添加属性和方法
3. 创建构造函数必须要时用 `new`  关键字

![构造函数](..\Png\构造函数.jpg)

### 对象原型(JavaScript中的继承)

​	JavaScript 常被描述为一种 **基于原型的语言** --- 每个对象拥有一个 **原型对象** ，对象以其原型为模板， 从原型继承方法和属性。原型对象也可能拥有原型，并从中继承方法和属性，一层一层，以此类推。这种关系常被称为 **原型链**	他解释了为何一个对象会拥有定义在其他对象中的属性和方法。

1. 只有函数有原型对象
2. 原型对象是可以让所有对象实例化共享它(原型对象)所包含的属性和方法
3. 原型链在内存中会一直寻找到 Objec() 中。

​	在 JavaScript 中，函数可以有属性。每个函数都要一个特殊的属性叫做`原型（prototype）`。

```
Person.prototype.name = 'ahao'	// 向Person函数的原型对象中添加属性
Person.
```

### AsyncFunction(异步方法)

​	AsyncFunction 构造函数用来创建新的 `异步函数` 对象，JavaScript 中每个异步函数都是 AsyncFunction 的对象

AsyncFunction 不是全局对象， 需要通过下面方法来获取:

```javascript
Object.getPrototypeOf(async function(){}).constructor
```

语法

```javascript
new AsyncFunction([arg1[, arg2[, ...argN]],] functionBody)
```

### Promise

1. 主要用于异步计算
2. 可以将异步操作队列化，返回符合预期的结果
3. 可以在对象之间传递和操作Promise，帮助我们处理队列

​	Promise 的构造函数接收一个参数，是函数，并且传入两个参数： `resolve`,`reject` 分别代表异步操作执行成功后的回调函数和异步操作执行失败后的回调函数。



























