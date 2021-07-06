
// 原型链
//实现的本质是重写原型对象，代之以一个新类型的实例。
//缺点：包含引用类型值的原型属性会被所有实例共享，当存在引用类型属性时，一个实例更改导致所有实例改变
function SuperType() {
    this.property = true
    this.colors = ['red','white','black']
}
SuperType.prototype.sayProperty = function () {
    console.log(this.property)
    console.log(this.colors)
}
function SubType() {
    this.property = false
}
SubType.prototype = new SuperType()
var instance1 = new SubType()
instance1.colors.push('pink')
var instance2 = new SubType()
console.log(instance1.sayProperty())
console.log(instance2.sayProperty())


// 借用构造函数
// 通过使用call()方法 在SubType 实例的环境下调用了 SuperType 构造函数。
// 这样一来，就会在新 SubType 对象上执行 SuperType()函数中定义的所有对象初始化代码
// SubType 的每个实例就都会具有自己的 colors 属性的副本了。
// 缺点
// 方法都在构造函数中定义，因此函数复用就无从谈起了。而且，在超类型的原型中定义的方法，对子类型而言也是不可见的，
// 结果所有类型都只能使用构造函数模式。
function SuperType(name) {
    this.colors = ['red', 'white', 'black']
    this.name = name
}
function SubType() {
    SuperType.call(this, 'wll')
}
var instance1 = new SubType()
instance1.colors.push('pink')
var instance2 = new SubType()
console.log(instance1.colors)
console.log(instance2.colors)


//组合继承
function SuperType(name) {
    this.name = name;
    this.colors = ['red','white','black']
}
SuperType.prototype.sayName = function(){
    console.log(this.name)
}
function SubType(name,age) {
    SuperType.call(this, name) //继承属性,覆盖prototype同名属性， 第二次调用SuperType
    this.age = age
}
SubType.prototype = new SuperType() //继承属性和方法，第一次调用SuperType
SubType.prototype.constructor = SubType //更改construtor指向
SubType.prototype.sayAge = function () {
    console.log(this.age)
}
var instance1 = new SubType('wll', 25)
instance1.colors.push('pink')
var instance2 = new SubType('will', 29)
console.log(instance1.sayName())
console.log(instance1.sayAge())
console.log(instance1.colors)
console.log(instance2.sayName())
console.log(instance2.sayAge())
console.log(instance2.colors)


