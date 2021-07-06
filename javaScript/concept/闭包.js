// 闭包是指有权访问另一个函数作用域中的变量的函数。
// 闭包（closure）是函数的嵌套（可以理解成内层函数）
// 即使外层函数执行完毕，内层函数仍旧可以引用外层函数的所有变量。直到内层函数执行完毕才释放变量。
// 使局部变量驻留内存。
// 匿名函数的执行环境具有全局性，闭包并不属于对象的属性或者方法，所有闭包的作用域是window。
// 注意：闭包允许内层函数引用父函数中的变量，内层函数首先在自身函数体内查找变量，如果没有定义，它就会向上查找，如果存在就会引用。
//     但是引用的是最终值。
//     比如for循环中内层函数想引用循环量i值，内层函数得到的i值则为遍历完所有之后的i值。
// 危害：闭包会引用包含函数的整个活动对象，使用闭包十分容易造成浏览器内存泄漏，严重情况会使浏览器挂死。


// this 对象是在运行时基于函数的执行环境绑定的：
// 在全局函数中，this 等于 window，
// 而当函数被作为某个对象的方法调用时，this 等于那个对象。
// 匿名函数的执行环境具有全局性，因此其 this 对象通常指向 window

// 单例（singleton），指的就是只有一个实例的对象，对象字面量创建单例对象

// 模块模式
var application = function () {
    var components = new Array()
    components.push(new BaseComponent());
    return {
        getComponentCount: function () {
            return components.length
        },
        registerComponent: function (com) {
            if (typeof com === 'object') {
                components.push(com)
            }
        }
    }
}()