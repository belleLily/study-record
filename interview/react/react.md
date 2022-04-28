### jsx本质是什么
createElement函数，生成virtual dom
[jsx本质](https://www.jianshu.com/p/e0dd27d8e783)

### context原理
[context使用](https://juejin.cn/post/7046271825516429348)
[context原理](https://juejin.cn/post/6997735545832996878)

### 描述redux单向数据流
[react-redux](https://juejin.cn/post/6844903653677989902)

### setState是同步还是异步
setState在合成事件和钩子函数中是异步的，在原生事件和setTime中都是同步的。setState的异步并不是说内部由异步代码实现的，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数调用的顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形成了所谓的“异步”，当然也可以通过第二个参数setState(partialState,callback)中的callback