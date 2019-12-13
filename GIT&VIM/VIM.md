[TOC]

### VIM

#### 命令模式

##### aio ：

a : 进入输入模式		

i : 进入输入模式			

o : 进入输入模式   

#### 输入模式



#### 底行命令模式





#### 临时退出操作

1. 在Vim 的正常模式下输入 :sh  即可进入 shell 环境。要返回到Vim编辑环境时， 输入exit 命令即可。
2.  这一解决方法住哟啊利用了 Linux/Unix 的作业机制。具体原理是：Crtl - z 命令将当前 Vi/Vim 进程

### TMUX

 



##### **窗口管理**

**prefix c**　　创建一个新窗口
**prefix ,**　　重命名当前窗口
**prefix w**　　列出所有窗口，可进行切换
**prefix n**　　进入下一个窗口
**prefix p**　　进入上一个窗口
**prefix l**　　进入之前操作的窗口
**prefix 0~9**　　选择编号0~9对应的窗口
**prefix .**　　修改当前窗口索引编号
**prefix '**　　切换至指定编号（可大于9）的窗口
**prefix f**　　根据显示的内容搜索窗格
**prefix &**　　关闭当前窗口

##### **窗格管理**

**prefix %**　　水平方向创建窗格
**prefix "**　　垂直方向创建窗格
**prefix Up|Down|Left|Right**　　根据箭头方向切换窗格
**prefix q**　　显示窗格编号
**prefix o**　　顺时针切换窗格
**prefix }**　　与下一个窗格交换位置
**prefix {**　　与上一个窗格交换位置
**prefix x**　　关闭当前窗格
**prefix space(空格键)**　　重新排列当前窗口下的所有窗格
**prefix !**　　将当前窗格置于新窗口
**prefix Ctrl+o**　　逆时针旋转当前窗口的窗格
**prefix t**　　在当前窗格显示时间
**prefix z**　　放大当前窗格(再次按下将还原)
**prefix i**　　显示当前窗格信息 

### **其他命令**

**tmux list-key**　　列出所有绑定的键，等同于**prefix ?**
**tmux list-command**　　列出所有命令





全局搜索	

q:			进入命令输入模式

lvimgrep /***/ **/*/.coffee

lw 打开搜索到的文件列表

lcl	关闭列表