[toc]

### Promise是什么，有什么用？

​	Promise 是 js 异步编程中的重要概念， 异步抽象处理对象，是目前比较流行 JavaScript 异步编程解决方案之一。Promise 是一种用于解决异步问题的思路，方案或者对象方式。(用来处理异步代码)

### Promise 的用法

```javascript
    const fn = new Promise ((resolve,reject) =>{
        setTimeout(() =>{
            let num = Math.ceil(Math.random()*10)
            if(num > 5){
                resolve(num);
            }else{
                reject(num);
            }
        },2000);
    });

    fn.then((res)=>{
        let str = " num 是 6"
        console.log('num 大于 5',res)
        return new Promise((resolve,reject) =>{
            if(res === 6){
                resolve(str);
            }else{
                str = " num 不知道是啥 " ;
                reject(str);
            }
        })
    },(err)=>{
        let str = " num 是 3"
        console.log('num 小于 5',err)
        return new Promise((resolve,reject) =>{
            if(err === 3){
                resolve(str)
            }else{
                str = " num 不知道是啥 "
                reject(str)
            }
        })
    }).then((res) =>{
        console.log(' 第二次 res',res)
    },(err)=>{
        console.log(' 第二次 err',err)
    })
```

### Promise 的原理

在 Promise 的内部，有一个状态管理器的存在， 有三种状态： pending，fulfilled， rejected。

1. Promise 对象初始化状态为 pending.
2. 当当调用resolve(成功), 会由pending => fulfilled
3. 当调用 reject(失败)，会由 pending => rejected

看上面的代码中的 resolve(num) 其实是将状态由 pending 改为fulfilled,然后向 .then 的成功 回调函数 传值, reject 反之。但是需要记住的是 **Promise 状态** 只能由 pending => fulfilled/rejected ，一旦修改就不能再变。当状态为 fulfilled (reject 反之) 时，then 的成功回调函数就会被调用， 并接收上面传来的参数，进而进行操作。 Promise.then 方法每次被调用，都返回一个新的 Promise对象所以可以链式写法

### Promise 的几种方法

* then **需要注意 then 的执行是异步的** ( then 第一个参数用于接收 Promise 成功的返回值, 第二个参数用于接收 Promise 失败的返回值)
```javascript
    promise.then(correct,wrong)// correct 成功， wrong 失败
```
* catch ( 在链式写法中可以捕获前面 then 中发送的异常 )
* resolve,reject ( 执行前者把 Promise 对象状态改为 resolve ，后者把 Promise 对象状态改为 reject )
* all ( 可以传入多个 Promise 对象，只要传入的对象中有 reject 状态的对象 all 的返回值就是rejected。)
* race 
    1. Promise.race() 方法也可以处理一个 Promise 实例数组 但它和 Promise.all() 不同。 在 race 中传入的参数哪个率先改变状态就向下传递谁的状态 。(但是其他还会继续执行)

### Promise 相关的面试题
