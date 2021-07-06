location.hash
// 1.在源地址将目标地址内嵌iframe，监听hashChange事件得到hash值，不会刷新页面
// 2.目标地址中通过修改parant.location.hash向源地址传递参数
// 3.ie, chrome 下的安全机制无法修改 parent.location.hash值，需内嵌一个源地址的其他页面iframe传递参数

window.name
// 1.在源地址将目标地址内嵌iframe，监听iframe的onload事件，得到iframe.contentWindow.name值
// 2.非同源无法获取name，需将目标地址加载完将src指向源地址其他页面

postMessage跨文档消息传递
// 一个窗口可以获得对另一个窗口的引用，目标窗口可以是
// 1、iframe的contentWindow属性
// 2、执行window.open返回的窗口对象
// 3、或者是命名过或数值索引的window.frames

CORS跨域资源共享
// 使用自定义的 HTTP 头部让浏览器与服务器进行沟通
// 1.在发送该请求时，需要给它附加一个额外的 Origin 头部，其中包含请求页面的源信息（协议、域名和端口）
// 2.如果服务器认为这个请求可以接受，就在 Access-Control-Allow-Origin 头部中回发相同的源信息

JSONP
// 1.Web 页面上调用 js 文件不受浏览器同源策略的影响，所以通过 Script 便签可以进行跨域的请求
// 2.首先前端先设置好回调函数，并将其作为 url 的参数。
// 3.服务端接收到请求后，通过该参数获得回调函数名，并将数据放在参数中将其返回
// 缺点：只支持get

ServerProxy
// 1.跨域的请求操作时发送请求给后端，让后端帮你代为请求，然后最后将获取的结果发送给你

图像Ping
// 网页可以从任何网页中加载图像，使用它们的 onload 和 onerror 事件处理程序来确定是否接收到了响应，在线广告跟踪浏览量
// 创建了一个 Image 的实例，然后将 onload 和 onerror 事件处理程序指定为同一个函数
// 缺点：单向通信，一是只能发送 GET 请求，二是无法访问服务器的响应文本

WebSocket
// 无同源策略限制