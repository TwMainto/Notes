[TOC]



### 优势

1. 一次开发，连通多端
2. 牌桌布局一目了然，适应各种复杂需求
3. UI开发效率极高
4. 客户端用JS编码可以无缝连接服务端

#### Home打开预制页面：

1. 制作预制页面
2. 在Home页面上添加button组件
3. 在制作好的预制页面加上dialog-e6.ts文件
4. 在button的View和Persenter中添加相应方法

#### 自动生成ts文件

```javascript
pwd   项目根目录
./bin/generate   执行此行代码
```

####  更改游戏路径

目录：项目/src/feature/Game.coffee 把其中 play 函数改成 加上 "data.play.game=游戏端口"

#### Definition中去服务端取集合数据

![1563012047434](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1563012047434.png)

协议：![1563012077312](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1563012077312.png)



CocosCreator + CoffeScript 实现跑马灯功能的两种方式：

```coffeescript
        lo.each lo.range(3), (i0) =>                                                #循环三遍
            cc.log "i0 ..................... ", i0
            lo.each lo.range(32), (i1) =>
                cc.log "i1 ....................... ",i1
                await @context.delay 100 * ((i1 + 1) + (i0 + 1) * 32)
                lo.each lo.range(32), (i2) => @["bright#{i2}"].active = false
                @["bright#{i1}"].active = true

        lo.reduce lo.range(99), Promise.resolve(), (promise, index) =>
            await promise
            await @context.delay 100
            lo.each lo.range(32), (i2) => @["bright#{i2}"].active = false
            @["bright#{index % 32}"].active = true
```

### 排错：

1. 先看看数据是否取到
2. 然后game    starting    view   ts 进行依次排除错误。
3. 如果没有排查出错误，到浏览器进行打断点调试。
4. 期间记得检查webpage有没有打开，重启cocos引擎，及一系列工具。

### 笔记:

2019.8.5

​	代码有进行延时操作的时候要注意一下，游戏退出，和它停止后的一些问题，框架中Async.run 可以用来做异常处理使用，有时候lo.each 和 lo.map 要退出不了循环的时候可以方向思维，可以不让进程进入循环，从而实现退出。

#### 背景音乐播放

​	在节点上加入音频组件，勾选Loop和Play On Load ,Preload 然后绑定 music-9c 脚本。控制显隐即可切换。

