// 1.作用域块（括号或花括号）内变量有效，且只能出现在块级作用域内
// 2.不存在变量提升
// 3.不允许在同一代码块中重复声明
let
// 1.声明的变量当前作用域全局有效
// 2.声明式变量存在变量提升
// 3.使用var声明变量前使用为undefined，使用let声明变量前使用会报错【暂时性死区】
// 4.var和let声明了但未赋值，之后语句使用为undefined
var;
const ;

箭头函数内部的this总是指向定义时所在的对象
  
解构赋值
// 1.数组本质是Symbol.Iterator接口
// 2.对象本质是先找到同名属性，赋值给相应的变量，foo是属性，baz是变量
let { foo: baz } = { foo: "aaa", bar: "bbb" };
// 3..允许指定默认值
var { x = 3 } = {};
// 4.交换变量
let x = 1;
let y = 2;
[x, y] = [y, x];

模版字符串 // 空格和缩进会被保留，trim()
`i am ${variety}`;

字符串新方法: includes,starstWidth,endsWidth,repeat,padStart,padEnd,trimStart,trimEnd,matchAll,replaceAll;

函数
// 允许指定默认值，默认参数如果是表达式，惰性求值（不初始化求值，运行时才求值）
// 函数的length属性，将返回没有指定默认值的参数个数。

数组
// 解放apply
Math.max(...[14, 3, 77])
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
arr1.push(...arr2);
// 复制数组
const a4 = [...a1, ...a2];
// 第一个元素，剩余元素rest，...rest只能放最后
[a, ...rest] = list
Array.from()//将类数组对象转为数组，空位转为undefined
// 字符串转为数组
[...'hello']  //['h','e','l','l','o']
[...arguments]
find, findIndex, fill, entries, keys, values//返回遍历器对象<Iterator>使用for...of遍历
includes//返回Boolean，indexOf内部使用===，无法判断NaN
flat(n) //flat默认拉平一层，参数表示拉平n层，Infinity
flatMap((cur, index, arr) => { }) //返回双层数组

//对象
//super//当前对象的原型对象，只能用在对象的方法之中
//链判断运算符
const firstName = message?.body?.user?.firstName || 'default';
const headerText = response.settings.headerText ?? 'Hello, world!';//?? 左侧的值为null或undefined时，才会返回右侧的值。
const headerText1 = response.settings.headerText || 'Hello, world!';//null、undefined、0、false
const animationDuration = response.settings?.animationDuration ?? 300;
Object.is() // 判断两个对象是否相等，解决==（类型转换），===（-0，0，NaN)
// 转Map
const map = new Map(Object.entries(obj));
Object.setPrototypeOf()
Object.getPrototypeOf()
Object.getOwnPropertyDescriptor(obj,key)
Object.getOwnPropertyDescriptors()
Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
Object.keys, Object.values, Object.entries
Object.fromEntries