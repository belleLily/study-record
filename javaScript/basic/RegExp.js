/*
 * @Author: belleLily
 * @Date: 2021-08-27 11:33:11
 * @LastEditors: Do not edit
 * @LastEditTime: 2021-08-27 13:42:22
 */

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

// 匹配第一个"bat"或"cat"，不区分大小写
var pattern1 = /[bc]at/i;
// 与 pattern1 相同，只不过是使用构造函数创建的，入参为字符串
var pattern2 = new RegExp("[bc]at", "i");

//正则表达式字面量始终会共享同一个 RegExp 实例，而使用构造函数创建的每一个新 RegExp 实例都是一个新实例。

正则;
字符串的正则: match, replace, search, split; //String.prototype.match 调用 RegExp.prototype[Symbol.match]
修饰符;
// Unicode 模式
u;
// y修饰符确保匹配必须从剩余的第一个位置开始
// 正则lastIndex属性可以表示匹配从第几个位置开始
y;
// s修饰符，使得.可以匹配任意单个字符
s;

断言;
// (?:)只匹配百分号之前的数字（包括%），/\d+(?:%)/
// 先行断言(?=)只匹配百分号之前的数字（不包括%），/\d+(?=%)/
// 先行否定断言(?!)只匹配不在百分号之前的数字（不包括%）， /\d+(?!%)/ -> /\d+(?!%)/g.exec('100%') -> 10
// 后行断言(?<=)只匹配美元符号之后的数字（不包括$），/(?<=\$)\d+/
// 后行否定断言(?<!)只匹配不在美元符号之后的数字（不包括$），/(?<!\$)\d+/

具名组匹配; //问号 + 尖括号 + 组名
const RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const matchObj = RE_DATE.exec("1999-12-31");
const year = matchObj.groups.year; // "1999"
const month = matchObj.groups.month; // "12"
const day = matchObj.groups.day; // "31"
//字符串替换时，使用$<组名>引用具名组。
let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
"2015-01-02".replace(re, "$<day>/$<month>/$<year>");
"2015-01-02".replace(
  re,
  (
    matched, // 整个匹配结果 2015-01-02
    capture1, // 第一个组匹配 2015
    capture2, // 第二个组匹配 01
    capture3, // 第三个组匹配 02
    position, // 匹配开始的位置 0
    S, // 原字符串 2015-01-02
    groups // 具名组构成的一个对象 {year, month, day}
  ) => {
    let { day, month, year } = groups;
    return `${day}/${month}/${year}`;
  }
);
