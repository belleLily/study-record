// 浏览器对象模型
// 浏览器对象模型（BOM）以 window 对象为依托，表示浏览器窗口以及页面可见区域。同时，window
// 对象还是 ECMAScript 中的 Global 对象，因而所有全局变量和函数都是它的属性，且所有原生的构造
// 函数及其他函数也都存在于它的命名空间下。
// 全局变量不能通过 delete 操作符删除，而直接在 window 对象上的定义的属性可以
window.innerWidth; //移动设备，可视窗口
document.documentElement.clientWidth; //IE6,标准模式
document.body.clientWidth; //混杂模式

//打开页面
window.open(
  url,
  targetName,
  特性字符串,
  是否取代浏览器历史记录中当前加载页的布尔值
);
window.close(); //只能关闭window.open打开的窗口

//第二个参数告诉 JavaScript 再过多长时间把当前任务添加到队列中。如果队列是空的，那么添加的代码会立即执行；
//如果队列不是空的，那么它就要等前面的代码执行完了以后再执行。
//第一个参数为匿名函数，this指向window
//使用超时调用来模拟间歇调用的是一种最佳模式。
setTimeout(fn, 1000);
setInterval(fn, 1000);

//同步调用
alert(), prompt(), confirm();

location; //保存当前窗口中加载文档的有关信息（路由跳转），window.location === document.location
//location属性
hash, host, hostname, href, pathname, port, protocol, search, location.assign();
// 打开当前页面
// 页面栈新增页面
window.location = "xxx";
location.href = "xxx";
// 页面栈替换页面
location.replace();
//重新加载
location.reload();

history;
history.go(-1); //后退一页
history.back();
history.forward();
history.length;
history.state;
// 三个参数：状态对象、新状态的标题和可选的相对 URL
// 新的状态信息就会被加入历史状态栈，而浏览器地址栏也会变成新的相对 URL。
pushState();
// 按下“后退”按钮，会触发 window 对象的 popstate
popstate(); //event.state
replaceState();

navigator; //浏览器对象
appCodeName, appName, platform, userAgent, plugs;

screen;
width, height, top, left, deviceXDPI, deviceYDPI;
