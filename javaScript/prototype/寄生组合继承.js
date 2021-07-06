//包含引用类型值的属性始终都会共享相应的值
function object(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

//一个用作新对象原型的对象和（可选的）一个为新对象定义额外属性的对象。
Object.create();

//寄生式继承
function createAnother(obj) {
  var clone = object(obj);
  clone.sayHello = function () {
    console.log("hello");
  };
  return clone;
}

//寄生组合式继承
function inheritPrototype(SubType, SuperType) {
  var prototype = object(SuperType.prototype);
  prototype.constructor = SubType;
  SubType.prototype = prototype;
}

function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function () {
  console.log(this.name);
};
function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}
inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function () {
  console.log(this.age);
};

var instance1 = new SubType("wll", 25);
instance1.colors.push("pink");
var instance2 = new SubType("will", 29);

console.log(instance1.colors);
console.log(instance1.sayName());
console.log(instance1.sayAge());

console.log(instance2.colors);
console.log(instance2.sayName());
console.log(instance2.sayAge());
