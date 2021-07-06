####  灵魂发问

1.构造函数的原型对象prototype和原型对象的constructor属性指回构造函数，循环引用不会造成内存浪费吗？

2.打印new Array()时，cancat等方法在实例下，isArray却是在constructor里，并且只能通过Array.isArray调用（原型方法明明可以通过实例直接调用），这两者有啥差别？
> answer：
静态方法：内置对象Object、Array、String、Function、Boolean、Math、Date对象成员的方法，可以直接从API对象的构造函数访问，而不是通过构造函数创建的对象实例访问。
实例方法：实例化后对象的方法
原型方法：通过 prototype 添加的方法，将会挂载到原型对象上，因此称之为原型方法

3.var colors3 = colorText.split(/[^\,]+/); //["", ",", ",", ",", ""]（黑人问号脸.jpg）

4.基本类型赋值按值传递，引用类型赋值按引用传递，函数传参数按值传递
```
var originArr = [1,2,3,4,5] 
var changeArr = function(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] + 1; //为什么这句会改变originArr[2,3,4,5,6],下面那句却不改变originArr
        arr = [0,0,0,0,0]
    }
    return arr
}
changeArr(originArr)
```

5.for of无法遍历对象是因为Ojbect对象没有实现Symbol.iterator方法，为啥解构（本质也是Symbol.iterato）却可以解构Object
- 对象的解构是通过查找相同属性，并非利用Iterator接口

6. `file-upload-jssdk`这个插件我怎么找都找不到？

7. 自定义hooks更改某依赖，hooks会执行？ 这里当send被调用，setRemaining为60时，触发useCountDown
```
const useVCode = (initialValue) => {
  const [msgId, setMsgId] = useLocalStorage(lsKeyMsgId);
  const [last, setLast, removeLast] = useLocalStorage(
    lsKeyTime,
    new Date().getTime() - initialValue * 1000
  );
  const [remaining, setRemaining] = useCountDown(
    Math.max(0, initialValue - Math.round((new Date().getTime() - last) / 1000))
  );

  useEffect(() => {
    if (remaining <= 0) removeLast();
  }, [remaining, removeLast]);

  const send = useCallback(
    async ({ regionCode, phone }) => {
      if (remaining === 0) {
        const data = await sendVCode({ regionCode, phone });
        setLast(new Date().getTime());
        setMsgId(data.msgId);
        setRemaining(initialValue);
      }
    },
    [remaining, initialValue, setMsgId, setLast, setRemaining]
  );
  const status = useCallback(() => {
    console.log(/** TODO */ remaining);
  }, [remaining]);

  return { remaining, send, status, msgId };
};
```

8. 闭包函数，对变量对暂存，如何每次都读取最新值
