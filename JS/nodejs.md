## HTTP 服务器

​	要开发 HTTP 服务器程序，从头处理 TCP 连接，解析 HTTP 是不现实的。 这些工作实际上已经由 Node.js 自带的 http 模块完成了，应用程序并不直接和 HTTP 协议打交道， 而是 操作 http 模块提供的 `request ` 	和 `response` 对象

`request`	对象封装了 HTTP 请求， 我们调用 ` request `	对象的属性和方法就可以拿到所有 HTTP 请求的信息。

`response`	对象封装了 HTTP 响应， 我们操作`response` 对象的方法，就可以把 HTTP 响应返回给服务器。