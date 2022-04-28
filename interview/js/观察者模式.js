// 原文链接，https://zhuanlan.zhihu.com/p/357911263

// 观察者模式定义了对象间的一种一对多的依赖关系，
// 当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知，并自动更新。观察者模式属于行为型模式。

// 目标对象
class Subject {
  constructor() {
    this.Observers = [];
  }
  add(observer) {
    this.Observers.push(observer);
  }
  remove(observer) {
    this.Observers.filter((item) => item === observer);
  }
  notify() {
    this.Observers.forEach((item) => item.update());
  }
}

// 观察对象
class Observer{
    constructor(name) {
        this.name = name;
    }
    update() {
        console.log(this.name)
    }
}

const sub = new Subject()
const obs1 = new Observer('ly')
const obs2 = new Observer('ysr');
sub.add(obs1);
sub.add(obs2);
sub.notify();

// 应用实例，原生js事件监听机制，addEventListener
// 优点：观察者模式好处是能够降低耦合，目标对象和观察者对象逻辑互不干扰，两者都专注于自身的功能，只提供和调用了更新接口；
// 缺点：而缺点也很明显，在目标对象中维护的所有观察者都能接收到通知，无法进行过滤筛选。