# 不同点
1. 事件绑定机制不同
vue是原生事件绑定到当前元素，而react则是SyntheticEvent绑定到根元素
2. 双向数据绑定
vue通过v-model实现双向数据绑定，react需要通过受控组件实现双向数据绑定
3. vue使用模版语言，而react使用jsx
4. vue声明式编程this.a=1，react函数式编程setState

# 相同点
1. 支持组件化
2. VMMV，数据驱动视图
3. 使用VDOM操作DOM