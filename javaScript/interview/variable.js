// https://www.cnblogs.com/xxcanghai/p/5189353.html

function Foo() {
  getName = function () {
    console.log(1);
  };
  return this;
}
Foo.getName = function () {
  console.log(2);
};
Foo.prototype.getName = function () {
  console.log(3);
};
var getName = function () {
  console.log(4);
};
function getName() {
  console.log(5);
}

//请写出以下输出结果：
Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();

//   2,4,1,1,2,1,1
// 1.Foo.getName静态属性
// 2.声明式函数提升,var赋值的函数表达式覆盖提升的函数
// 3.不带var的赋值为全局赋值，覆盖全局变量getName
// 4.全局变量getName
// 5.（.）的优先级高于new操作，new (Foo.getName)()
// 6.7.（.）的优先级高于new操作，new操作符高于函数执行，因此先执行了.getName，但是在进行左侧取值的时候，
//      new 带参数的优先级是高于函数调用的，因此先执行了 new Foo()，获得 Foo 类的实例对象，再进行了成员访问 .getName。
