[TOC]



# Git 的哲学：没有消息就是好消息

### Git是什么？

Git是目前世界上最先进的分布式版本控制系统（没有之一）

### Git的优点

1. 可以随时提交，本地的提交不会影响到他人；
2. 可以随意建立分支，本地的分支不会影响到他人
3. 可以随意改写历史，能够无所忌惮地提交
4. 可以在提交前先将修改放入暂存区，隔离其他修改
5. 可以让团队成员协同工作

Git的诸多特性，是它成为编辑器的延伸，成为开发工作流非常重要的一部分，它不再是单纯的版本控制系统，还是不可或缺的开发工具。

## 基本概念

### 仓库(Repository)

仓库的意思，即你的项目，你想在GitHub上开源一个项目，那就必须要新建一个Repository如果你开源了多个项目，你就拥有了多个Repositories。

工作区有一个隐藏目录==.git==，这个不算工作区，而是Git的版本空。Git的版本库里存了很多对象，其中最重要的就是称为stage（或者index）的暂存区还有Git为我们自动创建的第一个分支==master==，以及==master==的一个指针叫==HEAD==。

### 远程仓库

Git 是分布式版本管理系统，他也远程仓库的概念，clone一个远程仓库后，就会在本地出现一个远程仓库的镜像，远程仓库的分支称为远程分支。

提交版本后，这些版本将记录在本地分支，本地分支的修改要push到远程分支，纸样其他人才能看到本地分支的这些修改。

要同步他人的修改，需要先 fetch 远程仓库的数据，然后再从远程分支同步到本地分支。

### 收藏(Star)

仓库主页star按钮，意思为收藏项目的人数，在GitHub上如果有很多人收藏就很棒。

### 复制克隆项目(Fork)

克隆别人的项目，单独存在，会标明克隆自哪里。

### 发起请求(pull Request)

这是Fork的一个子进程，如果你在你Fork来的Repository中进行了改动，就可以给Frok的来源发送一个pull Request，如果项目创建人觉得OK就可以采用你的Pull Request.

### 工作区和暂存区

##### 工作区

工作区就是电脑文件资源管理器中能看到的目录，比如OneRepository就是一个工作区。

##### 暂存区（cache）  

在提交前，需要将修改移入暂存区，然后才能将暂存区的修改提交到版本库，把文件往Git版本库里添加的时候，是分两部执行的：

1. 用 ==git add== 把文件添加进去，实际上就是吧文件修改添加到暂存区；
2.  用 ==git commit== 提交更改，实际上就是把暂存区的所有内容提交到当前分支；

简单地理解就是需要提交的文件修改通通放到暂存区，然后，一次性提交暂存区的所有修改。

### HEAD

HEAM表示当前的版本库，一般情况它会和某个分支一致，在执行一些特殊操作的情况下，HEAD会与任何分支失去关联，称为derached HEAD。 如果在这种情况下提交修改，看然后切换到别的分支，那么这些提交将会丢失，处于detachedHEAD是请特别注意！

### ~

Git用  ~ 符号表示往前1个版本，用 ~ 3则表示往前数3个版本，因此，HEAD ~ 5 表示当前版本往前数5个版本 ， 89a26 ~ 2 表示这个版本往前数2个版本。

### 远程仓库

##### 在本机注册shh密钥：

在电脑的用户主目录下打开Git bash输入cat ~/.shh/id_rsa.pub   判断是否已经存在本地公钥。使用  ssh -keygen -t rsa -C“tw17607972081@gmail.com” 进行公钥和密钥的创建，一路回车使用默认值完成创建，在从输入cat ~/.ssh/id_rsa.pub来获取你的公钥。

##### 添加远程库

在Github创建一个新的库，然后使用git remote add origin git@github com:tw17607972081@gmail.gmail/learngit.git命令建立本地库和远程库的关联，远程给库的名字是“origin”这个是git的默认叫法，也可以改成别的，下一步使用 git push -u origin master把本地库的内容推送到远程，用 ==git push==命令，实际上是把当前分支master推送到远程。

## 常用Git命令

```git
mkdir name;创建库
git add name   添加文件
git commit -m"说明"   提交文件
git status 获取仓库当前状态
git diff 文件名    获取当前文件具体修改内容
git log 查看之前的版本
git reset --hard HEAD^ 回退一个版本   HEAD指定的版本号，就是当前的版本。
git checkout --<file>   丢弃工作区的修改
git reset HEAD<file>   把暂存区的修改回退到工作区
git rm    删除文件，但是可以用git checkout --<file>一键还原
clip <~/.ssh/id_rsa.pub   拷贝公钥到你的粘贴板下
cat ~/.ssh/id_rsa.pub   获取你的公钥
git push -u origin master  把origin的内容推送到远程
git clone  拉取git服务器上的文件
git rebase -i HEAD~   进入vi模式进行合并提交
```

#### rebase

1 .使用 git rebase -i 进行commit 整理，如果不小心把master|REBASE 1/10 或者master|REBASE -i  玩出来了就用 git rebase --abort解决代码回退问题

2 .git rebase 还可以用来，把git  fetch 从远程库拉取下来的代码 合并到本地

3 . 在一的基础上rebase 如果异常退出了vi窗口就可以用 git rebase - -edit -todo 来回到退出之前的vi

## 提交

```javascript
git add login.png   //把修改的login.png文件添加到git暂存
git commit -m"xxx"   //把git暂存的资源提交到git库
git fetch origin master //拉取远程origin库master分支的数据到本地git库
git rebase origin/master  //拉取本地origin库的master分支到本地文件夹
git push origin master  //把本地的git库提交到远程 origin库的master分支中
```

## VIM

#### 模式切换

1.  命令（默认）模式： 使用英文冒号：进入底行命令模式，	使用 a , i ,s , o四种方式进入编辑模式
2. 编辑模式： esc 切换命令模式
3. 底行命令模式：esc 切换到命令模式

语法

```
底行模式：
:w	保存		:w filenme	另存为		:q	退出
:wq	保存并退出		:e!	撤销更改返回上一次保存状态
:q!	不保存强制退出		:set nu	设置行号

命令模式：
ZZ 保存并退出		u 撤销操作，可多次使用
dd	剪切当前行		yy 复制当前行
p	粘贴(粘贴后面的直到有空格)		dw	删除

编辑模式：
p	主提交		r	主提交，但编辑提交消息
s	融入主提交 	f	融入主提交但丢弃此提交的日志消息
d	删除提交

```

进入MSYS2 ，如果电脑没有关机，第一条然后进入分屏下进入git本地库内存位置即可使用

1. tmux
2. webpack - -mode=development  - -watch
3. ctrl+b  +  shift+5
4. 切换光标位置  ctrl+b o
5. 进入git库磁盘位置

crtl+ B  中括号