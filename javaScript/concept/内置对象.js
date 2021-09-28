Reflect;
apply;
construct;
defineProperty;
deleteProperty;
get;
getPropertyOf;
has;
isExtensible;
ownKeys;
preventExtensions;
set;
setPropertyOf;

Math;
// 属性
Math.PI;
//方法
min();
max();
ceil();
floor();
round();
random();
abs(); //绝对值
pow(); //次幂

Math.random().toString(16).slice(2, 6).toUpperCase();
//Math.max(...[1, 2, 3, 4, 5, 6, 7, 8])
Math.max.apply(Math, [1, 2, 3, 4, 5, 6, 7, 8]);
// Math.max(...list.map(function (item) {
//     return item.id;
//   })
// );
Math.max.apply(
  Math,
  list.map(function (item) {
    return item.id;
  })
);

item.list.reduce(function (pre, cur) {
  return pre.rate < cur.rate ? cur : pre;
}).rate;

Date;
Date.parse();
Date.now();
