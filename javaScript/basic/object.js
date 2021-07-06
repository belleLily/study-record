//实例属性 or 方法
constructor;
hasOwnProperty();
isPrototyOf();
propertyIsEnumberable();
toLocaleString();
toString();
valueOf();

//静态属性 or 方法
arguments;
arguments.callee;
assign();
create();
defineProperties();
defineProperty();
entries();
keys();
getOwnPropertyDescriptor();
getOwnPropertyDescriptors();
getOwnPropertyNames();
getOwnPropertySymbols()[
  //属性
  [Configurable]
][[Enumerable]][[Writable]][[Value]];
// 属性所在的对象、属性的名字、描述符对象。
Object.defineProperty(obj, prop, descriptor);
Object.defineProperty(obj, "newKey", {
  configurable: true | false, //可delete
  enumerable: true | false, //可枚举
  value: "任意类型的值", //可读
  writable: true | false, //可修改
  get: function () {},
  set: function () {},
});
Object.defineProperties(obj,{})
Object.getOwnPropertyDescriptor();

// 复制对象， 浅拷贝
let objCopy = Object.assign({}, obj); //无法拷贝二级属性
let objCopy = { ...obj }; //无法拷贝二级属性
let objCopy = JSON.parse(JSON.stringify(obj)); //对象中不能包含 function 或 RegExp

//遍历对象
// 1.0
//for in会输出实例+原型链上可枚举的属性。先检测确认该对象的值不是 null 或 undefined。
//如果仅想输出自身的属性可以借助 hasOwnProperty。可以过滤掉原型链上的属性。
for (var key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key);
  }
}
//2.0
// Object.keys（obj）是es5中新增的方法，用来获取对象自身可枚举的属性键。
Object.keys(obj).forEach((i) => {
  console.log(i);
});
//3.0
//Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名组成的数组。
Object.getOwnPropertyNames(obj).forEach((i) => {
  console.log(i);
});
for (const k of Object.keys(obj)) // enumerable own keys
for (const [k, v] of Object.entries(obj)) // enumerable own [key, value]s
for (const k of Object.getOwnPropertyNames(obj)) // all own keys
for (const s of Object.getOwnPropertySymbols(obj)) // all own symbols
for (const k of Reflect.ownKeys(obj)) // all own keys (include symbols)


// 检测对象类型
Object.prototype.toString.call(obj) === "[Object Object]";
obj.constructor === Object;

// 判断对象是否为空对象
JSON.stringify(data) == "{}";
Object.keys(data).length === 0;

Object.is();
//防篡改对象
Object.preventExtensions(); //不可扩展
Object.istExtensible(); //对象是否可以扩展
Object.seal(); //密封，[[Configurable]] = false
Object.isSealed();
Object.freeze(); //冻结，[[Writable]] = false，冻结对象既是密封的又是不可扩展的
Object.isFrozen();
