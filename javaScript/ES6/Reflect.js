Reflect;
// 1、Reflect对象上可以拿到语言内部的方法
// 2、修改某些Object方法的返回结果，让其变得更合理，defineProperty报错
// 3、Object的命令式操作都变成函数行为
Reflect.has(obj, key);  // 'assign' in Object，delete等
Reflect.deleteProperty(obj, key);
// 4、Reflect对象的方法与Proxy对象的方法一一对应 

// 静态方法
Reflect.apply(target, thisArg, args)
// const youngest = Math.min.apply(Math, ages);
// const youngest = Reflect.apply(Math.min, Math, ages);
Reflect.construct(target, args)
// const instance = Reflect.construct(Parent, ['张三']); Parent构造函数
Reflect.get(target, name, receiver) //如果name属性部署了读取函数（getter），则读取函数的this绑定receiver。
Reflect.set(target, name, value, receiver)
Reflect.defineProperty(target, name, desc)
Reflect.deleteProperty(target, name)
Reflect.has(target, name)
Reflect.ownKeys(target)
Reflect.isExtensible(target)
Reflect.preventExtensions(target)
Reflect.getOwnPropertyDescriptor(target, name)
Reflect.getPrototypeOf(target)
Reflect.setPrototypeOf(target, prototype)