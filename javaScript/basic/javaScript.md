## Javascript组成
1. ECMAScript（实现标准）
2. DOM（文档对象模型，提供访问和操作网页内容的方法和接口）
3. BOM（浏览器对象模型，提供与浏览器交互的方法和接口）

## <script>元素
async：文档渲染期间，异步下载脚本就执行，多个文件不顺序执行
defer：脚本立即下载，延迟到文档完全被解析和显示之后再执行，多个文件顺序执行

## 严格模式
ECMAScript 5 引入，严格模式是为 JavaScript 定义了一种不同的解析与执行模型。在ECMAScript 3 中的一些不确定的行为将得到处理，而且对某些不安全的操作也会抛出错误。

## var 
var 操作符定义的变量将成为定义该变量的作用域中的局部变量。也就是说，如果在函数中使用 var 定义一个变量，那么这个变量在函数退出后就会被销毁

## 数据类型
- String
- Number(数字精度问题)
- Boolean
- Null
- Undefined
- Object
- Symbol（原始数据类型，表示独一无二的值，定义对象的唯一属性名，Object.getOwnPropertySymbols(),Reflect.ownKeys()）
- BigInt

## typeof 基本类型
"number"(NaN)、"string"、"boolean"、"undefined"、"object"([],{},null,RegExp)、"function"
eq: typeof {} === "object"
## instanceof
eq: {} instanceof Object
- instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
## Object.prototype.toString.call()
- 基本类型会先转换成基本包装类型【装箱】，[Symbol.toStringTag]
>"Null", "undefined", "Array", "Boolean", "Date", "Error", "Function", "Math", "Number", "Object", "RegExp", "String", "JSON", "Arguments", "Map", "Set", "WeakMap", "WeakSet"

> !! 等价于 Boolean()，new Boolean()传入任何值都会返回true
- false, '', 0, NaN, null, undefined
- true,  非空字符串, 非0数字, 任何对象, {}

- 0开头8进制
- 0x开头16进制

## 按位非
- 操作数的负值减 1

## 作用域
全局作用域：没有块级作用域，if，for语句（i为最外一层循环的值）执行结束后，也依旧会存在于外部的执行环境中。
函数作用域

## 垃圾回收
自动垃圾收集机制，也就是说，执行环境会负责管理代码执行过程中使用的内存。找出那些不再继续使用的变量，然后释放其占用的内存。为此，垃圾收集器会按照固定的时间间隔（或代码执行中预定的收集时间），周期性地执行这一操作。
1.标记清除
垃圾收集器在运行的时候会给存储在内存中的所有变量都加上标记，它会去掉环境中的变量以及被环境中的变量引用的变量的标记。垃圾收集器
完成内存清除工作，销毁那些带标记的值并回收它们所占用的内存空间。
2.引用记数

## 基本包装类型
String、Number、Boolean
1.在读取模式下访问基本类型值时，就会创建对应的基本包装类型的一个对象，从而方便了数据操作；
2.操作基本类型值的语句一经执行完毕，就会立即销毁新创建的包装对象。
