Reflect;
apply;
construct;
defineProperty;
deleteProperty;
get;
getPropertyOf;
has;
isExtensible;
ownKeys;
preventExtensions;
set;
setPropertyOf;

Math;
// 属性
Math.PI;
//方法
min();
max();
ceil();
floor();
round();
random();
abs(); //绝对值
pow(); //次幂

Math.random().toString(16).slice(2, 6).toUpperCase();
//Math.max(...[1, 2, 3, 4, 5, 6, 7, 8])
Math.max.apply(Math, [1, 2, 3, 4, 5, 6, 7, 8]);
// Math.max(...list.map(function (item) {
//     return item.id;
//   })
// );
Math.max.apply(
  Math,
  list.map(function (item) {
    return item.id;
  })
);

item.list.reduce(function (pre, cur) {
  return pre.rate < cur.rate ? cur : pre;
}).rate;

Date;
Date.parse();
Date.now();

RegExp;
//exec()接受一个参数，即要应用模式的字符串，然后返回包含第一个匹配项信息的数组；
exec();
//index 表示匹配项在字符串中的位置，而 input 表示应用正则表达式的字符串。
var text = "mom and dad and baby";
var pattern = /mom( and dad( and baby)?)?/gi;
var matches = pattern.exec(text);
console.log(matches.index); // 0
console.log(matches.input); // "mom and dad and baby"
console.log(matches[0]); // "mom and dad and baby"
console.log(matches[1]); // " and dad and baby"
console.log(matches[2]); // " and baby"

//接受一个字符串参数。在模式与该参数匹配的情况下返回true；否则，返回 false。
test();
var text = "this has been a short summer";
var pattern = /(..)or(.)/g;
if (pattern.test(text)) {
  console.log(RegExp.$1); //sh，RegExp.$1需分组才会有
  console.log(RegExp.$2); //t
}

let matchReg = new RegExp("(?<=：).*?(?=℃)", "gi");
let matchReg = new RegExp("：([^：]+).*?(?=℃)", "gi");

var reg = new RegExp("(^|&)" + "code" + "=([^&]*)(&|$)", "i");
var r = "code=utf-8&f=3&rsv_bp=1&rsv_idx=1&tn=80035161_1_dg"
  .substr(0)
  .match(reg);
//则r为一个数组，共有四项，分别如下：
//r[0] 为发现的匹配项，如此项为null，则r本身即为空。此时，该项为"code=utf-8&".
//r[1] 为第一个正则表达式所匹配的项，即(^|&)所对应的项，目前为空，即“”。
//r[2]为第二个正则表达式所匹配的项，即([^&]*)所对应的项，目前为“utf-8
//r[3]为第三个正则表达式所匹配的项，即(&|$)所对应的项，目前为”&“，若为最后一个，则为”“。

// (?:pattern) 非获取匹配，匹配pattern但不获取匹配结果，不进行存储供以后使用。这在使用或字符“(|)”来组合一个模式的各个部分是很有用。例如“industr(?:y|ies)”就是一个比“industry|industries”更简略的表达式。
// (?=pattern) 非获取匹配，正向肯定预查，在任何匹配pattern的字符串开始处匹配查找字符串，该匹配不需要获取供以后使用。例如，“Windows(?=95|98|NT|2000)”能匹配“Windows2000”中的“Windows”，但不能匹配“Windows3.1”中的“Windows”。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。
// (?!pattern) 非获取匹配，正向否定预查，在任何不匹配pattern的字符串开始处匹配查找字符串，该匹配不需要获取供以后使用。例如“Windows(?!95|98|NT|2000)”能匹配“Windows3.1”中的“Windows”，但不能匹配“Windows2000”中的“Windows”。
// (?<=pattern) 非获取匹配，反向肯定预查，与正向肯定预查类似，只是方向相反。例如，“(?<=95|98|NT|2000)Windows”能匹配“2000Windows”中的“Windows”，但不能匹配“3.1Windows”中的“Windows”。
// (?<!pattern) 非获取匹配，反向否定预查，与正向否定预查类似，只是方向相反。例如“(?<!95|98|NT|2000)Windows”能匹配“3.1Windows”中的“Windows”，但不能匹配“2000Windows”中的“Windows”。这个地方不正确，有问题

// 匹配第一个"bat"或"cat"，不区分大小写
var pattern1 = /[bc]at/i;
// 与 pattern1 相同，只不过是使用构造函数创建的，入参为字符串
var pattern2 = new RegExp("[bc]at", "i");

//正则表达式字面量始终会共享同一个 RegExp 实例，而使用构造函数创建的每一个新 RegExp 实例都是一个新实例。
