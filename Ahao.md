[TOC]

### Camera摄像机

1.每个场景都需要一个摄像机，但也可以同时存在多个摄像机，并且creator会默认创建一个名为Main Camera的摄像机，一般这个会作为这个场景的主相机。（多摄像机可以用来制作多人分屏，或者小地图）

#### 属性

​	cullingMask 用来控制摄像机需要渲染哪些分组，分组在编辑器菜单栏中编辑器菜单栏中的 **项目 -> 项目设置 -> 分组管理** 

​	zoomRatio 指定摄像机的缩放比例，值越大显示的图像越大

## 游戏功能

暂停图片切换： 第一种方式   在脚本中添加按钮图片组，然后在暂停按钮上添加切换图片方法。

拖动监听： ![1565166864526](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1565166864526.png)
