// 事件冒泡（由里及外）
// 事件捕捉（由外及里）
// 事件流包括三个阶段：事件捕获阶段、处于目标阶段和事件冒泡阶段。

// on + 事件名
onclick();
ondblclick();
// 当页面完全加载后（包括所有图像、JavaScript 文件、CSS 文件等外部资源）
window.onload();
//初始html文档完全加载并解析之后触发，无需等待样式、图片、子frame结束。
document.addEventListener("DOMContentLoaded", fn, false);
document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        console.log('初始DOM,加载解析完成')
    }
}
onunload();
onabort();
onerror();
onselect();
onresize();
onscroll();

onfocus();
onblur();
onsubmit();

onmousedown();
onmouseup(); //释放鼠标
// 在鼠标进入作用元素的时候才会触发
onmouseenter(); //不冒泡
onmouseleave(); //不冒泡
onmousemove();
// 在鼠标进入或者离开作用元素或者其子元素时，都会触发
onmouseout();
onmouseover();
onmousewheel();

//回车->13,退出->27
onkeydown(); //任意键
onkeypress(); //字符键
onkeyup();

ontouchstart()
ontouchend()
ontouchmove()
ontouchcancel()

onmsgesturestart() //当一个手指已经按在屏幕上而另一个手指又触摸屏幕时触发。
onmsgesturechange()
onmsgestureend()

// 往返缓存
pageshow()
pagehide()
hashchange()
orientationchange()

// 观察者模式
// this指向绑定元素
// 多次绑定事件，顺序执行
addEventListener("click", fn, false); //true->捕获,false->冒泡
removeEventListener();
// IE
// this指向window
// 多次绑定事件，逆序执行
attachEvent("onclick", fn);
detachEvent("onclick", fn);

//事件对象Event->包含事件处理信息
currentTarget; //当前注册事件元素
target; //实际触发事件元素
preventDefault(); //只有 cancelable 属性设置为 true 的事件，才可以使用 preventDefault()来取消其默认行为。
stopPropagation(); //取消事件冒泡or捕捉
//IE
window.event;
srcElement;
window.event.returnValue = false; //组织默认事件
cancelBubble(); //IE 不支持事件捕获，因而只能取消事件冒泡；

e.clientX;
e.clientY;
pageX = scrollX =
  e.clientX + document.documentElement.scrollLeft || document.body.scrollLeft;


// 事件委托
// 多次将事件绑定到元素增大 DOM 访问次数，会延迟整个页面的交互就绪时间。
// 事件委托利用了事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。
// document 对象很快就可以访问，而且可以在页面生命周期的任何时点上为它添加事件处理程序（无需等待 DOMContentLoaded 或 load 事件）。
// removeChild, replaceChild, innerHTML变更html元素时，并不会处理事件绑定，滞留内存导致性能下降，手动移除事件置空或者进行事件委托


// 事件模拟
var btn = document.getElementById("myBtn"); 
//创建事件对象，KeyboardEvent
var event = document.createEvent("MouseEvents"); 
//初始化事件对象，initKeyboardEvent，initKeyEvent，initEvent
event.initMouseEvent("click", true, true, document.defaultView, 0, 0, 0, 0, 0, 
 false, false, false, false, 0, null); 
//触发事件
btn.dispatchEvent(event);