# TypeScript脚本语言

##### 在VS Code 里编写TypeScript代码有很完善的代码提示

TypeScript是一种由微软开发的自由和开源的编程语言，他是JavaScript的一个严格超集，并添加了可选的静态类型和基于类的面向对象编程。TypeScript的设计目标是开发大型应用，然后转译成JavaScript运行。由于TypeScript是JavaScript的超集，任何现有的JavaScript程序都是合法的TypeScr程序。

### TypeScript和Cocos Creator

在Cocos中 TypeScript和其他JavaScript脚本一样，项目assets目录下的TypeScript脚本（.ts文件）在创建或修改后激活编辑器，就会被编译成兼容浏览器标准的ES5 JavaScript脚本，编译后的脚本存放在项目下的library（还包括其他资源）目录。

### 特殊类型

==cc.Texture2D,cc.AudioClip,cc.PartcleAsset==类型数据在 ts 中的声明一定要按照一下的格式进行声明：

```
@property({
	type:cc.Texture2D
})
texture:cc.Texture2D=null;

@property({
	type : cc.Texture2D
})
texture : cc.Texture2D[] = [];
```

