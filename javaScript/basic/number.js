
Infinity
-Infinity

//实例方法：
valueOf()
fixedOf() //四舍五入为指定小数位数的数字。
toString()
toPrecision()

//转化成数字
Number()
parseInt()
parseFloat()
+/- //使用一元加减操作符进行隐式转换    

// Global内置对象上的方法
parseInt()
parseFloat()
isNaN()
isFinite()
isInteger()
encodeURI()//不会对本身属于 URI 的特殊字符进行编码，例如冒号、正斜杠、问号和井字号；
decodeURI()
encodeURIComponent()//任何非标准字符进行编码
decodeURIComponent()
//参数，即要执行的 ECMAScript（或 JavaScript）字符串
//在 eval()中创建的任何变量或函数都不会被提升，因为在解析代码的时候，它们被包含在一个字符串中；它们只在 eval()执行的时候创建。
//谨慎使用eval，以防恶意代码注入
eval()


//将两个整型变量值互换
b = (a+b) - (a=b);