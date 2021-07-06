Ajax;
// Asynchronous JavaScript XML
var xhr = new XMLHttpRequest() || new ActiveXObject();
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
      console.log(xhr.responseText);
    } else {
      console.log("Request was unsuccessful: " + xhr.status);
    }
  }
};
xhr.open("get", "example.txt", true);
xhr.timeout = 1000;
xhr.send(null);
xhr.abort(); //取消异步请求

//loadstart,progress,error,abort,load,loadend

xhr.open("post", "postexample.php", true);
// xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
var form = document.getElementById("user-info");
// 使用 FormData 的方便之处体现在不必明确地在 XHR 对象上设置请求头部。XHR 对象能够识别传入的数据类型是 FormData 的实例，并配置适当的头部信息。
xhr.send(new FormData(form));

// http请求头
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
//响应头
Content - Type;
Content - Length;
Access - Control - Allow - Credentials;
Access - Control - Allow - Origin;
Cache - Control;
Cross - Origin - Resource - Policy;
Date;
Expires;
Last - Modified;
Progma;

CSRF;
// （Cross Site Request Forgery，跨站点请求伪造）
XSS;
//（Cross - Site Scripting，跨站点脚本）

// 跨站请求方案

CORS;
// Cross Origin Resource Sharing（跨源资源共享），就是使用自定义的 HTTP 头部让浏览器与服务器进行沟通
// 在发送该请求时，需要给它附加一个额外的 Origin 头部，其中包含请求页面的源信息（协议、域名和端口）
// 如果服务器认为这个请求可以接受，就在 Access-Control-Allow-Origin 头部中回发相同的源信息

Option请求;
// 1.获取服务器支持的HTTP请求方法；
// 2.跨域请求的预检，对服务器数据产生副作用的 HTTP 非简单请求（put,delete,connect,options,trace,patch)，浏览器必须首先使用 OPTIONS 方法发起一个预检请求（preflight request）
// 从而获知服务端是否允许该跨域请求。服务器确认允许之后，才发起实际的 HTTP 请求。
// 其目的就是为了判断实际发送的请求是否是安全的。

withCredentials;
// 默认情况下，跨源请求不提供凭据（cookie、HTTP 认证及客户端 SSL 证明 等 ）。 通 过 将withCredentials 属性设置为 true，
// 可以指定某个请求应该发送凭据。如果服务器接受带凭据的请求，会用下面的 HTTP 头部来响应。
// Access-Control-Allow-Credentials: true

//其他跨站技术
// 1.图像Ping
// 2.JSONP;
// 回调函数和数据,动态<script>元素
function handleResponse(response) {
  console.log(
    "You’re at IP address " +
      response.ip +
      ", which is in " +
      response.city +
      ", " +
      response.region_name
  );
}
var script = document.createElement("script");
script.src = "http://freegeoip.net/json/?callback=handleResponse";
document.body.insertBefore(script, document.body.firstChild);
// 3.http流，浏览器向服务器发送一个请求，而服务器保持连接打开，然后周期性地向浏览器发送数据。
// 4.SSE（Server-Sent Events，服务器发送事件）
var source = new EventSource("myevents.php");//传入的 URL 必须与创建对象的页面同源
source.onmessage = function(event){ 
    var data = event.data; 
    //处理数据
};
source.close();
// 5.Web Sockets 持久连接上提供全双工、双向通信
// 创建了 Web Socket 之后，会有一个 HTTP 请求发送到浏览器以发起连接。
// 在取得服务器响应后，建立的连接会使用 HTTP 升级从 HTTP 协议交换为 WebSocket 协议。
// 无同源限制
var socket = new WebSocket("ws://www.example.com/server.php");
readyState
socket.open()
socket.onerror()
socket.close()
socket.send()
socket.onmessage()

