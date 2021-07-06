//函数即对象，函数名即指向函数的指针
//函数无重载，后来者居上

//声明式函数提升
console.log(sum(10, 10));
function sum(num1, num2) {
  return num1 + num2;
}

this; //引用的是函数据以执行的环境对象
arguments; //它是一个类数组对象，包含着传入函数中的所有参数。
arguments.callee; //属性，该属性是一个指针，指向拥有这个 arguments 对象的函数。

//函数是对象，因此函数也有属性和方法。
//每个函数都包含两个属性：length 和 prototype。其中，length 属性表示函数希望接收的命名参数的个数

window.addEventListener("transitionend", callback);

//函数返回
// break：执行break操作，跳出所在的当前整个循环，到外层代码继续执行。
// continue：执行continue操作，跳出本次循环，从下一个迭代继续运行循环，内层循环执行完毕，外层代码继续运行。
// return：执行return操作，直接返回函数，所有该函数体的代码（包括循环体）都不会再执行。

// arguments

//基本类型按值传递和特殊类型按引用传递
var a = [1, 2, 3];
var b = a;
a = [4, 5, 6];
console.log(a); //[1,2,3]
console.log(b);

//函数传参按值传递
var a = 1;
var obj = {
  b: 2,
};
var fn = function () {};
fn.c = 3;
function test(x, y, z) {
  x = 4;
  y.b = 5;
  z.c = 6;
  return z;
}
test(a, obj, fn);
console.log(a + obj.b + fn.c); //12

//JavaScript引擎预编译变量声明
//预编译就是在内存中开辟一些空间，存放一些变量与函数。
//预编译时声明式函数被提取出来，优先执行，而且相同的函数后面会覆盖前面，再执行赋值式函数。
//赋值式函数是不会进行预编译处理的。相当于变量赋值。
//函数声明会覆盖变量声明，但不会覆盖变量赋值。
function value() {
  return 1;
}
var value;
console.log(typeof value); //"function"

//函数声明的优先级高于变量声明的优先级，但如果该 变量value赋值了，那结果就完全不一样了：
function value() {
  return 1;
}
var value = 1;
console.log(typeof value); //"number"

if (!("a" in window)) {
  var a = 1; //var语句预编译，此时a为undefined。window.a存在，不会执行if语句。
}
console.log(a); //undefined

//当全局变量跟局部变量重名时，局部变量的scope会覆盖掉全局变量的scope，当离开局部变量的scope后，又重回到全局变量的scope，
var a = 1;
function test() {
  console.log(a);
  //a为undefined! 这个a并不是全局变量，这是因为在function scope里已经声明了（函数体倒数第4行）一个重名的局部变量,
  //所以全局变量a被覆盖了，这说明了Javascript在执行前会对整个脚本文件的定义部分做完整分析,所以在函数test()执行前,
  //函数体中的变量a就被指向内部的局部变量.而不是指向外部的全局变量. 但这时a只有声明，还没赋值，所以输出undefined。
  a = 4;
  console.log(a); //a为4,没悬念了吧？ 这里的a还是局部变量哦！
  var a; //局部变量a在这行声明
  console.log(a); //a还是为4,这是因为之前已把4赋给a了
}
test();
console.log(a); //a为1，这里并不在function scope内，a的值为全局变量的值

var c;
console.log(b); //变量赋值但是未声明，会报错Uncaught ReferenceError: a is not defined
console.log(c); //变量声明但是未赋值，为undefined

//函数返回函数
function createComparisonFunction(propertyName) {
  return function (object1, object2) {
    var value1 = object1[propertyName];
    var value2 = object2[propertyName];
    if (value1 < value2) {
      return -1;
    } else if (value1 > value2) {
      return 1;
    } else {
      return 0;
    }
  };
}
var data = [
  { name: "Zachary", age: 28 },
  { name: "Nicholas", age: 29 },
];
data.sort(createComparisonFunction("name"));
console.log(data[0].name); //Nicholas
data.sort(createComparisonFunction("age"));
console.log(data[0].name); //Zachary

// new操作符
// 1. 创建一个新对象；
// 2. 将构造函数的作用域赋给新对象（因此 this 就指向了这个新对象）；
// 3. 执行构造函数中的代码（为这个新对象添加属性）；
// 4. 返回新对象。

// 函数柯里化，调用另一个函数并为它传入要柯里化的函数和必要参数
function curry(fn) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function () {
    var innerArgs = Array.prototype.slice.call(arguments);
    var finalArgs = args.concat(innerArgs);
    return fn.apply(null, finalArgs);
  };
}
function bind(fn, context) {
  var args = Array.prototype.slice.call(arguments, 2);
  return function () {
    var innerArgs = Array.prototype.slice.call(arguments);
    var finalArgs = args.concat(innerArgs);
    return fn.apply(context, finalArgs);
  };
}


// JavaScript 是运行于单线程的环境中
// 主进程执行完毕后，空闲时，进入待执行的事件队列
// 随着页面在其生命周期中的推移，代码会按照执行顺序添加入队列。
setTimeout;
// 设定一个 150ms 后执行的定时器不代表到了 150ms 代码就立刻执行，它表示代码会在 150ms 后被加入到队列中。
setInterval;
// 使用 setInterval()创建的定时器确保了定时器代码规则地插入队列中。这个方式的问题在于，定时器代码可能在代码再次被添加到队列之前还没有完成执行
// 当使用 setInterval()时，仅当没有该定时器的任何其他代码实例时，才将定时器代码添加到队列中。这确保了定时器代码加入到队列中的最小时间间隔为指定间隔。
// 1.某些间隔会被跳过；
// 2.多个定时器的代码执行之间的间隔可能会比预期的小
setTimeout(function () {
  //处理中
  setTimeout(arguments.callee, interval);
}, interval);
// 数组分块
function chunk(array, process, context) {
  setTimeout(function () {
    var item = array.shift(); //shift会改变原数组
    process.call(context, item);
    if (array.length > 0) {
      setTimeout(arguments.callee, 100);
    }
  }, 100);
}
