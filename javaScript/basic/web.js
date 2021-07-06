navigator.onLine;
window.online;
window.offline;
applicationCache;
document.cookie; //cookie 名称是不区分大小写的

storage事件;
sessionStorage;
localStorage;

// 性能优化
// 1.避免不必要的属性查找，将属性局部变量化
// 2.优化js，比如优化循环，复杂if-else转换成switch-case，多个变量声明用逗号，创建数组或对象用字面量而不是构造函数
// 3.减少dom更新，是使用文档片段fragment来构建 DOM 结构
// 4.使用事件代理
// 5.减少http请求

requestAnimationFrame;
const element = document.getElementById('some-element-you-want-to-animate');
let start;
function step(timestamp) {
    if (start === undefined)
        start = timestamp;
    const elapsed = timestamp - start;

    //这里使用`Math.min()`确保元素刚好停在200px的位置。
    element.style.transform = 'translateX(' + Math.min(0.1 * elapsed, 200) + 'px)';

    if (elapsed < 2000) { // 在两秒后停止动画
        window.requestAnimationFrame(step);
    }
}
window.requestAnimationFrame(step);


document.hidden
document.visibilityState
onvisibilitychange事件

Geolocation
navigator.geolocation
getCurrentPosition(sucCallback, failCallback, args)
watchPosition()
clearWatch()

File
name
size
type
lastModifiedDate
FileReader
readAsText(file, encoding)
readAsDataURL(file)
readAsBinaryString(file)
readAsArrayBuffer(file)
progress()
error()
load()
abord()
loadend()
slice(startByte, length) //读取文件的一部分,返回一个 Blob 的实例，Blob 是 File 类型的父类型。

window.URL.createObjectURL() //返回值是一个字符串，指向一块内存的地址。
window.URL.revokeObjectURL()

window.performance  //度量信息

WebWork
var worker = new Worker("stufftodo.js");
worker.postMessage("start! ");
worker.onmessage = function () { }
worker.onerror = function () { }
worker.terminate()

const
var
let //代码块形成块级作用域


Iterator
next()

Proxy
//创建一个以 myObject 为原型的代理对象
var proxy = Proxy.create(handler, myObject);
var Stack = (function(){ 
    var stack = [], 
    allowed = ["push", "pop", "length" ]; 
    return Proxy.create({ 
        get: function(receiver, name){
            if (allowed.indexOf(name) > -1){ 
                if(typeof stack[name] == "function"){ 
                    return stack[name].bind(stack); 
                } else { 
                    return stack[name]; 
                } 
            } else { 
                return undefined; 
            } 
        }
    });
}); 
var mystack = new Stack(); 
mystack.push("hi"); 
mystack.push("goodbye"); 
console.log(mystack.length); //1 
console.log(mystack[0]); //未定义
console.log(mystack.pop()); //"goodbye"

//Object键容易与原生属性混淆。简单映射能做到键和值与对象属性分离，从而保证对象属性的安全存储。
Map
get()
set()
delete()

Set //一组不重复的元素
has()
add()
delete()

WeakMap

StructType

ArrayType

//语法糖，覆盖在目前基于构造函数和基于原型的方式和类型之上。
Class
extends
prototype


// 有"#" "*"符号输入
// <input type="tel"/>

// 纯数字
// <input pattern="\d*"/>

// 拨号
// <a href="tel:10086">打电话给: 10086</a>

// 发送短信
// <a href="sms:10086">发短信给: 10086</a>

// 发送邮件
// <a href="mailto:839626987@qq.com">发邮件给：839626987@qq.com</a>

// 选择照片或者拍摄照片
// <input type="file" accept="image/*">

// 选择视频或者拍摄视频
// <input type="file" accept="video/*">

// 多选
// <input type="file" multiple>

// <a href="weixin://">打开微信</a>
// <a href="alipays://">打开支付宝</a>
// <a href="alipays://platformapi/startapp?saId=10000007">打开支付宝的扫一扫功能</a>
// <a href="alipays://platformapi/startapp?appId=60000002">打开支付宝的蚂蚁森林</a>