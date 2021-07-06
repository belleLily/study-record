// 工厂模式
// 缺点：每次它都会返回一样的对象，无法对象识别，无法得知一个对象的类型。
function createObject(name, age, job) {
  var obj = new Object();
  obj.name = name;
  obj.age = age;
  obj.job = job;
  obj.sayName = function () {
    console.log(this.name);
  };
  return obj;
}
var obj1 = createObject("wll", 25, "frontDeveloper");

//构造函数模式
// 缺点：每次实例化将属性方法都实例化了，无法使用公共方法缺乏封装性
function CreateObject(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        console.log(this.name)
    }
}
var obj1 = new CreateObject('wll', 25, 'frontDeveloper');

//原型模式
// 缺点：无法传参，引用类型共享问题
function CreateObject() {
    
}
CreateObject.prototype.name = 'wll'
CreateObject.prototype.age = 25;
CreateObject.prototype.job = 'frontDeveloper'
var obj1 = new CreateObject()

//组合构造原型模式
// 最广泛，认可度最高
function CreateOject(name,age,job) {
    this.name = name
    this.age = age
    this.job = job
}
CreateObject.prototype = {
    constructor: CreateObject,
    sayName: function () {
        console.log(this.name)
    }
}
var obj1 = new CreateObject('wll', 25, 'frontDeveloper')

