# 构建用户界面的渐进式框架

## 异步渲染
[原理](https://blog.csdn.net/qq_42072086/article/details/106986201)

## computed

`computed` 有缓存，`data` 不变则不会重新计算。[computed 原理](https://www.cnblogs.com/qianxiaox/p/13704845.html)。
发布订阅模式`_computedWatchers`，遍历 `comptued` 对象，对每个计算属性进行数据劫持和依赖收集`Ojbect.defineProperty`。

## watch

监听引用类型需要深度监听`handler`,`deep`，拿不到 oldVal(此时 oldVal 和 val 指针指向同一块内存地址)

## v-for

`v-for` 优先级比 `v-if` 高，不建议一起使用，因为 for 循环每项都会执行 `v-if` 判断，性能不好

## 自定义事件

`event` 自定义事件实现跨层级通信，`new Vue()`导出 `event`，$on,$emit(观察者模式，vm._events)，`beforeDestory` 里及时解绑自定义事件($off)

## 生命周期渲染

created, vue 实例初始化完毕，构建 vnode（js 对象）完毕，created 是从父组件->子组件。mounted 时 vnode 渲染成真实 dom，页面渲染完毕，从子组件->父组件。

## 自定义 v-model

父子组件 v-model 实现双向通信。
v-model 绑定计算属性，需要用对象，实现 get，set
`<custom-component v-model="text"></custom-component>`
custom-component.vue
`<input type="text" :value="text" @input="$emit('change',$event.target.value)"/>`
<script>
   export default{
      model: {
         prop: 'text',
         event: 'change',
      },
      props: {
         text: String,
         default(){
            return ''
         }
      }
   }
</script>

## $nextTick

1. 在 task 或者 microtask 中推入一个 timerFunc，在当前调用栈执行完以后以此执行直到执行到 timerFunc，目的是延迟到当前调用栈执行完以后执行。
2. timerFunc 一个函数指针，指向函数将被推送到任务队列中，等到主线程任务执行完时，任务队列中的 timerFunc 被调用，
3. 主要通过 Promise、MutationObserver 以及 setTimeout

## MVVM-数据驱动视图

## slot
1. 作用域插槽，slot组件向父组件传值

## 动态（异步）组件
   通过import加载组件，编译时加载，动态异步加载

## keep-alive
   keep-alive组件，依次遍历节点，碰到keep-alive组件则去匹配exclude和include的规则，命中则放入cache中，标记是缓存组件，否则生成正常vnode

## mixin
   合并策略，组件共同逻辑复用，缺点无法跟踪来源，不利于维护

## 组件化

## 响应式
Object.defineProperty
1. 复杂数据类型（对象）深度监听，递归计算量大
2. 无法监听新增/删除的属性（Vue.set,Vue.delete)
3. 无法监听数组的变化（push,pop等）

## vdom

## diff算法优化
vnode树diff时间复杂度为o(n)3
1. 同层比较
2. tag不相同，删除重建，不再深度比较
3. tag和key都相同，相同节点，不再深度比较

##  模版编译
1. vue template compile 将模版编译成render函数，插件`vue-template-compiler`
2. 执行render函数生成vnode
patch
`
const template = `<input type="text" v-model="name">
const res = compiler.compile(template)
with(this){return _c('input',{directives:[{name:"model",rawName:"v-model",value:(name),expression:"name"}],attrs:{"type":"text"},domProps:{"value":(name)},on:{"input":function($event){if($event.target.composing)return;name=$event.target.value}}})}

`
## vue渲染流程
1. 模版解析为render函数（vue-cli这步通过vue-loader，在开发环境已完成）
2. 初始化数据，触发响应式，监听data
3. 执行render函数，生成vnode， patch(elem,vnode)

## hash路由
1. 触发网页跳转，监听浏览器前进后退，window.hashchange
2. hash变化不会刷新页面
3. 不会提交到server端

## ajax放在那个生命周期
moutend。在created,mounted效果都是一样的，因为js是单线程。ajax是异步任务，会被浏览器放进eventLoop里面，都会等主线程执行完毕再执行。而放在mouted里面，在dom渲染完进行异步请求，会有比较好的语义逻辑理解。

## 如何将组件所有props传递给子组件
$props
