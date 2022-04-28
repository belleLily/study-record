// 原文链接，https://zhuanlan.zhihu.com/p/357911263

// 发布订阅模式是基于一个事件（主题）通道，希望接收通知的对象Subscriber通过自定义事件订阅主题，
// 被激活事件的对象Publisher通过发布主题事件的方式通知各个订阅该主题的Subscriber对象。

// 发布订阅模式和观察者模式的不同在于，增加了第三方即事件中心；
// 目标对象状态的改变并直接通知观察者，而是通过第三方的事件中心来派发通知。

// 事件中心
class Channel {
  constructor() {
    this.topics = {};
  }
  addTopic(topicName) {
    this.topics[topicName] = [];
  }
  removeTopic(topicName) {
    delete this.topics[topicName];
  }
  subscribe(topicName, sub) {
    if (this.topics[topicName]) {
      this.topics[topicName].push(sub);
    } else {
      this.topics[topicName] = [sub];
    }
  }
  unsubscribe(topicName, sub) {
    this.topics[topicName].forEach((item, index) => {
      if (item === sub) {
        this.topics[topicName].splice(index, 1);
      }
    });
  }
  publish(topicName) {
    this.topics[topicName].forEach((item) => item.update(topicName));
  }
}

// 发布者
class Publish {
  constructor(name, channel) {
    this.name = name;
    this.channel = channel;
  }
  addTopic(topicName) {
    this.channel.addTopic(topicName);
  }
  removeTopic(topicName) {
    this.channel.removeTopic(topicName);
  }
  publish(topicName) {
    this.channel.publish(topicName);
  }
}

// 订阅者
class Subscribe {
  constructor(name, channel) {
    this.name = name;
    this.channel = channel;
  }
  subscribe(topicName) {
    this.channel.subscribe(topicName, this);
  }
  unsubscribe(topicName) {
    this.channel.unsubscribe(topicName, this);
  }
  update(topicName) {
    console.log(`${this.name}-${topicName}`);
  }
}

const channel = new Channel();
const pub1 = new Publish("pub1", channel);
const pub2 = new Publish("pub2", channel);

const sub1 = new Subscribe("sub1", channel);
const sub2 = new Subscribe("sub2", channel);

pub1.addTopic("topic1");
pub2.addTopic("topic2");

sub1.subscribe("topic1");
sub2.subscribe("topic2");

pub1.publish("topic1");
