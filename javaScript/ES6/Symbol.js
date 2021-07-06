

// 表示独一无二的值。原始类型值
Symbol(key)        // 每次返回一个不同的Symbol，属于未登记的Symbol值
Symbol.for(key)    // 全局搜索，不存在则注册，属于全局登记的Symbol值
Symbol.keyFor(Symbol)  // 返回登记的Symbol值的类型key
Symbol.prototype.description

// 魔术字符串，代码中多次出现，形成强耦合，不利于维护

单例模式(Singleton) //调用一个类，任何时候返回的都是同一个实例。

Symbol.hasInstance // instanceof调用对象的[Symbol.hasInstance], 该属性指向一个方法
const Even = {
    [Symbol.hasInstance](obj) {
      return Number(obj) % 2 === 0;
    }
};
1 instanceof Even // false
2 instanceof Even // true

Symbol.isConcatSpreadable = false   //concat时是否可展开
数组默认可展开(undefined)
类数组默认不展开

Symbol.species  // 指定创建的衍生对象的原型对象
class MyArray extends Array {
    static get [Symbol.species]() { return Array; }
}
const a = new MyArray();
const b = a.map(x => x);        //b是a的衍生对象
b instanceof MyArray // false
b instanceof Array // true

Symbol.match
String.prototype.match(regexp)
// 等同于
regexp[Symbol.match](this)
class MyMatcher {
  [Symbol.match](string) {
    return 'hello world'.indexOf(string);
  }
}
'e'.match(new MyMatcher()) // 1

Symbol.replace
String.prototype.replace(searchValue, replaceValue)
// 等同于
searchValue[Symbol.replace](this, replaceValue)

Symbol.search
String.prototype.search(regexp)
// 等同于
regexp[Symbol.search](this)

Symbol.split
String.prototype.split(separator, limit)
// 等同于
separator[Symbol.split](this, limit)

// 迭代器对象，指向该对象的默认遍历器方法
Symbol.iterator; //for of,扩展运算符，解构赋值，Array.from内部实现都是遍历器接口

Symbol.toPrimitive

Symbol.toStringTag

Symbol.unscopables