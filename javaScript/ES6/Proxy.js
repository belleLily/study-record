Proxy; // 修改某些操作的默认行为
get(traget, key, receiver); //拦截某个属性的读取操作, receiver指proxy 实例本身，操作行为所针对的对象
set(target, key, value, receiver); // 拦截某个属性的赋值操作
has(target, key); // 判断对象是否具有某个属性，in运算符，handler返回boolean
deleteProperty(target); //拦截delete操作，，handler返回boolean
ownKeys(target); //拦截对象自身属性的读取操作，ownKeys()方法返回的数组成员，只能是字符串或 Symbol 值。
// Object.getOwnPropertyNames()
// Object.getOwnPropertySymbols()
// Object.keys()
// for...in循环
getOwnPropertyDescriptor(target, key); //拦截Object.getOwnPropertyDescriptor()，返回一个属性描述对象或者undefined
defineProperty(target, key, descriptor); //拦截了Object.defineProperty()操作
preventExtensions(target); //拦截Object.preventExtensions()，handler返回boolean
getPrototypeOf(target); //拦截获取对象原型
// Object.prototype.__proto__
// Object.prototype.isPrototypeOf()
// Object.getPrototypeOf()
// Reflect.getPrototypeOf()
// instanceof
isExtensible(target); //拦截Object.isExtensible()操作，handler返回boolean，强限制返回值必须与目标对象的isExtensible属性保持一致
setPrototypeOf(target); //拦截Object.setPrototypeOf()方法，handler返回boolean
apply(target, context, args); //拦截函数的调用、call和apply操作。
constructor(target, args, newTarget); //用于拦截new命令

Proxy.revocable(); //返回一个可取消的 Proxy 实例。

this
// target: Proxy 代理的情况下，目标对象内部的this关键字会指向 Proxy 代理。
// handler: Proxy 拦截函数内部的this，指向的是handler对象