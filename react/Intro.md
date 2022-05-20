# 构建用户界面的 JavaScript 库

## 受控组件
表单元素的值受state控制

## 非受控组件
表单元素的值不受state控制（ref、defaultValue、defaultChecked）
适用场景：文件上传
API: createRef

## setState
1. 赋值不可变值（保持初始值不变），保证初始值和赋值后的值不相同，在shouldComponentUpdate无法正确比较nextPorps和nextState
2. setState普通赋值是异步的，将多个setState合并成一个，提高性能。在setTimeout，addEventListener里setState是同步的
3. setState传入对象会合并，传入函数时，不会进行合并 
4. batchUpdate事务机制(isBatchUpdates)，命中batchUpdate保存组件于dirtyComponent队列中。否则遍历所有dirtyComponent，调用updateComponent更新pending state或者props
transaction事务机制
perform(anyMethod): initialize() -> anyMethod() -> close();

## Portals
createPortal

## context
createContext

## 异步组件
1. import
2. React.lazy
3. React.Suspense

## 性能优化
1. shouldComponentUpdate、React.PureComponent、React.memo

## HOC（高阶组件）

## Render Props

## 函数式编程
1. 纯函数（返回一个新值，没有副作用）
2. 不可变值

## vdom

## reconciliation（协调阶段）diff
1. 协调阶段，进行diff算法，纯js计算
2. commit阶段，将diff结果渲染为dom
js是单线程的，且和dom渲染共用一个线程。fiber将reconciliation任务进行拆分，dom需要渲染，暂停更新，空闲时再恢复，window.requestIdleCallback

## JSX
react.createElement()，第一个参数既可以是组件名（首字母大写），也可以是html标签（首字母小写）。返回vnode

## SyntheticEvent
合成事件，`event.__proto__.constructor`，模拟出来 DOM 事件所有能力
原生事件，`event.nativeEvent.target`指向当前元素
        `event.nativeEvent.currentTarget`指向document
1. 更好的兼容性和跨平台
2. 挂载到document上，减少内存消耗，避免频繁解绑
3. 方便事件的统一管理（如事务机制）

        
React useEffect中使用定时器所产生的闭包陷阱：https://juejin.cn/post/6844904112459350029
https://overreacted.io/zh-hans/making-setinterval-declarative-with-react-hooks/
https://juejin.cn/post/6844903974647103496#comment
https://blog.csdn.net/u010074572/article/details/105176653/


Reaact.createRef
ReactDom.createPortal
React.createContext