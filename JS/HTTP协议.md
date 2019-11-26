[toc]



## HTTP 协议简介

​	在 web 应用中，服务器把网页传给浏览器，实际上就是把网页的 HTML 代码发送给浏览器， 让浏览器显示出来。而浏览器和服务器之前的传输协议是 HTTP 。

1.  HTML 是一种用来定义网页的文本， 会 HTML 就可以编写网站
2.  HTTP 是网络上传输 HTML 的协议，用于浏览器和服务器的通信。

##### Chrome 浏览器

开发者工具：

1.  `Elements` 显示网页的结构
2. `Network`  显示浏览器和服务器的通信

#### HTTP 

##### 请求 

步骤1 ：	浏览器首先向服务器发送 HTTP 请求， 请求包括：

方法： 	GET // POST , GET 仅请求资源， POST 会附带用户数据；

路径：	`full/url/path`  

域名： 有 Host 头指定 ：`Host: www.sina.com.cn`

以及其他相关的Header;

如果是 POST ， 那名请求还包括一个 Body， 包含用户数据。

##### 响应

步骤2 ：	服务器想浏览器返回 HTTP 响应 ，响应包括

响应代码 ： `200` 表示成功 ，	`3xx` 表示重定向，	`4xx ` 	表示客户端发送的请求有错误， `5xx ` 	表示服务器端处理发生了错误

响应类型： 由 `Content-Type` 指定， 如 ` Content-Type : text/html; charset = utf=8` 表示响应类型是 HTML 文本， 并且编码是 `UTF-8` , ` Content-Type: image/jpeg ` 	表示响应类型是JPEG格式的图片 ；

以及其他相关的 Header ；

通常服务器的 HTTP 协议还会携带内容， 也就是Body， 包含响应的内容， 网页的 HTML源码就在 Body 中。





























