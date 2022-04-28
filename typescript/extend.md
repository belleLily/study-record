Typescript


extends

1、表示继承/拓展的含义
2、表示约束的含义
3、表示分配的含义

继承某个类型
在 ts 里，extends除了可以像 js 继承值，还可以继承/扩展类型：
 interface Animal {
   name: string;
 }
 interface Dog extends Animal {
   bark(): void;
 }
 // Dog => { name: string; bark(): void }

泛型约束
在书写泛型的时候，我们往往需要对类型参数作一定的限制，比如希望传入的参数都有 name 属性的数组我们可以这么写：

function getNames<T extends { name: string }>(entities: T[]):string[] {
  return entities.map(entity => entity.name)
}
这里extends对传入的参数作了一个限制，就是 entities 的每一项可以是一个对象，但是必须含有类型为string的name属性。再比如，redux 里 dispatch 一个 action，必须包含 type属性：

interface Dispatch<T extends { type: string }> {
  (action: T): T
}

never是所有类型的子类型
 
Exclude

Exclude是TS中的一个高级类型，其作用是从第一个联合类型参数中，将第二个联合类型中出现的联合项全部排除，只留下没有出现过的参数。

type A = Exclude<'key1' | 'key2', 'key2'> // 'key1'
Exclude的定义是

Extract

高级类型Extract和上面的Exclude刚好相反，它是将第二个参数的联合项从第一个参数的联合项中提取出来，当然，第二个参数可以含有第一个参数没有的项。

