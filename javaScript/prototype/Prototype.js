//1.构造函数People.prototype属性（指针）指向原型对象，这个对象使所有实例共享的属性和方法
//2.原型对象的contructor属性（指针）指回构造函数People
//3.People.prototype.contrucotr = People
function People() {
  this.type = "人"; //实例属性
}
//1.原型方法
People.prototype.showType = function () {
  console.log(this.type);
};
//1.实例对象person.__proto__指向构造函数People原型对象，所以可以访问People原型对象上所有属性和方法
//2.person.__proto__ = People.prototype
//3.person.constructor = People
let person = new People();
//实例属性，实例方法
person.name = "belleLily";
person.showName = function () {
  console.log(this.name);
};

//继承
function Woman() {
  this.sex = "女";
}
Woman.prototype.showSex = function () {
  console.log(this.sex);
};
//1.w是Woman的实例对象，可以访问Woman原型属性和方法
//2.Woman的原型对象指向person实例对象，该实例指向People原型对象
//3.w可以访问person的实例属性和方法和People原型属性和方法
Woman.prototype = person; //new People()
let w = new Woman();

//组合式继承
//先创建子类的实例对象，然后再将父类的方法通过call方法添加到this上，通过原型和构造函数的机制来实现
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
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function () {
  console.log(this.age);
};
var instance1 = new SubType("zxf", 24);
instance1.colors.push("black");
console.log(instance1.colors); //["red","blue","green","black"]
instance1.sayName(); //"zxf"
instance1.sayAge(); //24
var instance2 = new SubType("jay", 36);
console.log(instance2.colors); //["red","blue","green"]
instance2.sayName(); //"jay"
instance2.sayAge(); //36

Person.prototype.isPrototypeOf(person1)
Object.getPrototypeOf(person1) == Person.prototype

person1.hasOwnProperty("name")

// in 操作符会在通过对象能够访问给定属性时返回 true，无论该属性存在于实例中还是原型中。
console.log("name" in person1); //true
//原型上包含某属性
function hasPrototypeProperty(object, name){ 
  return !object.hasOwnProperty(name) && (name in object); 
}
//在使用 for-in 循环时，返回的是所有能够通过对象访问的、可枚举的（enumerated）属性，其中既包括存在于实例中的属性，也包括存在于原型中的属性。
Object.keys(Person.prototype)//可枚举属性
Object.getOwnPropertyNames() //所有实例属性，无论它是否可枚举
// 构造函数在不返回值的情况下，默认会返回新对象实例。