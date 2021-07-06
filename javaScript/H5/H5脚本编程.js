// 跨文档消息传递，跨站登陆
postMessage(message, origin)
//注意：所有支持 XDM 的浏览器也支持 iframe 的 contentWindow 属性
var iframeWindow = document.getElementById("myframe").contentWindow; 
iframeWindow.postMessage("A secret", "http://www.wrox.com");
window.onmessage = function (e) { } //data,origin,source
//or
var target = window.open('http://www.baidu.com')
target.postMessage('A secret', 'http://www.baidu.com')
window.addEventListener('message',sendCallback)

//拖放事件
dragstart
drag
dragend

dragenter
dragover
dragleave   //或者drop

dataTransfer
//设置和接收文本数据
//"text"和"URL"两种有效的数据类型
event.dataTransfer.setData("text", "some text"); 
var text = event.dataTransfer.getData("text");
//被拖动的元素能够执行哪种放置行为
dropEffect  //none,move,copy,link
//dropEffect 属性只有搭配 effectAllowed 属性才有用。
effectAllowed //uninitialized,none,copy,link,move,copyLink,copyMove,linkMove,all
addElement(element)
clearData(format)
setDragImag(element,x,y)

// 图像和链接的 draggable 属性自动被设置成了 true，而其他元素这个属性的默认值都是 false。
draggable


// 媒体元素
video
audio