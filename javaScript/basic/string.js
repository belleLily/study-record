//转换成字符串的方法
toString(); //对数字进行转换时，可以传递2、8、16进制作为参数
String();

// 方法
concat();
valueOf();
//不会修改原始字符串
trim();
trimStart(); //trimLeft();
trimEnd(); //trimRight();

toUpperCase();
toLowerCase();
toString();
startsWith(string, index); //返回boolean
endsWith(string, index);
//split()方法可以接受可选的第二个参数，用于指定数组的大小
split();
// 如果"o"在这个字符串中仅出现了一次，那么 indexOf()和 lastIndexOf()会返回相同的位置值。
// 第二个参数，表示从字符串中的哪个位置开始搜索。
indexOf();
lastIndexOf();
// 可以通过循环调用 indexOf()或 lastIndexOf()来找到所有匹配的子字符串
var stringValue = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
var positions = new Array();
var pos = stringValue.indexOf("e");
while (pos > -1) {
  positions.push(pos);
  pos = stringValue.indexOf("e", pos + 1);
}
// console.log(positions); //"3,24,32,35,52"

includes(string, index); //返回boolean

// 如果第一个参数是字符串，那么只会替换第一个子字符串。
// 要想替换所有子字符串，唯一的办法就是提供一个正则表达式，而且要指定全局（g）标志，
// 不会改变原字符串
replace();
replaceAll(); //第一个参数是正则必须加上g
var text = "cat, bat, sat, fat";
result = text.replace(/(.at)/g, "word ($1)");
console.log(result); //word (cat), word (bat), word (sat), word (fat)
//模式的匹配项、模式匹配项在字符串中的位置和原始字符串。
function htmlEscape(text) {
  return text.replace(/[<>"&]/g, function (match, pos, originalText) {
    switch (match) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case '"':
        return "&quot;";
    }
  });
}
console.log(htmlEscape('<p class="greeting">Hello world!</p>'));
//&lt;p class=&quot;greeting&quot;&gt;Hello world!&lt;/p&gt;

padStart(totalLength, string); //头部补全
padEnd(totalLength, string); //尾部补全

repeat(num); //次数
// 大写字母A 到Z 的值是从65 到90
// 小写a到z 是从97 到 122
// 字符转ascii码：用charCodeAt();
// ascii码砖字符：用fromCharCode();
chartAt();
String.fromCharCode(65); //A
"A".charCodeAt();
var stringValue = "hello world";
console.log(stringValue.charAt(1)); //"e"
var stringValue = "hello world";
console.log(stringValue.charCodeAt(1)); //输出"101"
//只接受一个参数，要么是一个正则表达式，要么是一个 RegExp 对象。返回字符串中第一个匹配项的索引；如果没有找到匹配项，则返回-1。
search();
//只接受一个参数，要么是一个正则表达式，要么是一个 RegExp 对象。返回了一个数组
match();
matchAll(); //matchAll必须交g修饰符表示全局

substr(start, length); //第二个参数返回的字符个数，第一参数负值与字符串的长度相加，第二个参数负值转换为 0
subString(start, end); //不返回end，第一参数参数转换为 0，第二个参数转换为 0
slice(start, end); //不返回end，第一参数负值与字符串的长度相加，第二参数负值与字符串的长度相加

substr(); //方法可在字符串中抽取从 start 下标开始的指定数目的字符。stringObject.substr(start,length)
substring(); //方法用于提取字符串中介于两个指定下标之间的字符。stringObject.substring(start,stop)

//逗号运算符，逗号运算符就是 运算前面的，返回最后一个。
var i = 0,
  j = 1,
  k = 2;
console.log((i++, j++, k)); //返回的是k的值 2 ，如果写成k++的话 这里返回的就是 3
console.log(i); //1
console.log(j); //2
console.log(k); //2

// 运算符优先级 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
