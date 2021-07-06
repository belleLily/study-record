Set //成员值唯一的类数组对象，构造函数
add()
delete()
has()
clear()
key()
values()
entries()
forEach()

size
    
[...new Set('ababbc')].join('') //去除字符串里面的重复字符。

WeakSet //只接收对象，弱引用，利于垃圾回收

Map // 同Set
set()
// Map转数组
const map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);
[...map.keys()]

WeakMap //只接收对象作为键名，弱引用，利于垃圾回收

// 1.Map转数组
[...Map]
// 2.数组转Map
new Map(arr)
// 3.Map转对象
遍历
// 4.对象转Map
new Map(Object.entries(obj))