

#### HTTP请求过程
1. DNS域名解析
2. TCP三次握手连接
3. 发送HTTP请求
4. 服务器处理请求并返回HTTP报文，断开连接
5. 浏览器渲染页面
6. 连接结束，四次挥手

#### 请求报文
1. 请求行
2. 请求报头
Accept;
Accept - Charset;
Accept - Encoding;
Accept - Language;
Connection;
Cookie;
Host;
Referer;
User - Agent;
Content - Type;
Content - Length;
Origin;
3. 请求体

#### 响应报文
1. 状态码
> 101 - 切换协议（http升级为Web Socket)
> 200 - 请求成功
> 301 - 资源转移
> 304 - 资源未修改，浏览器缓存机制
> 401 - 未认证用户身份
> 403 - 禁止访问
> 404 - 资源不存在
> 500 - 服务器错误
> 502 - 网关错误
> 503 - 服务不可达
> 504 - 网关超时
> 505 - 不支持的http协议版本
2. 响应报头
> Content - Type;
> Content - Length;
> Access - Control - Allow - Credentials;
> Access - Control - Allow - Origin;
> Cache - Control;
> Cross - Origin - Resource - Policy;
> Date;
> Expires;
> Last - Modified;
> Progma;
3. 响应报文


#### 浏览器缓存机制
浏览器在本地磁盘对用户最近请求过的文档进行存储，当访问者再次访问同一页面时，浏览器就可以直接从本地磁盘加载文档
1. 浏览器会先从本地获取该资源缓存的header信息，根据Expires和Cache - Control为强缓存，则直接从缓存中获取资源，包括缓存的header信息，本次请求不会与服务器进行通信；
2. 否则携带第一次请求返回的有关缓存的header字段信息（Last-Modified/IF-Modified-Since. Etag/IF-None-Match），发送请求到服务器
3. 服务器根据请求中的相关header信息来对比结果是否命中协商缓存，如果是服务器返回新的响应header信息更新缓存中的对应header信息，但是并不返回资源内容
4. 它会告知浏览器可以直接从缓存获取；否则返回最新的资源内容
##### 强缓存
> Expires-日期时间
> Cache - Control
max - age 时间长度（s)
no - cache
no - store
public
private
##### 协商缓存
> Last-Modified
> Etag