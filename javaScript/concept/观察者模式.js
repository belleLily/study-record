function EventTarget() {
  this.handles = {};
}
EventTarget.prototype = {
  constructor: EventTarget,
  addHandler: function (type, fn) {
    if (typeof this.handles[type] === "undefined") {
      this.handles[type] = [];
    }
    this.handles[type].push(fn);
  },
  removeHandler: function (type, handler) {
    if (this.handles[type] instanceof Array) {
      var handlers = this.handles[type];
      for (var i = 0, len = handlers.length; i < len; i++) {
        if (handlers[i] === handler) {
          break;
        }
      }
      this.handles.splice(i, 1);
    }
  },
  fire: function (event) {
    if (!event.target) {
      event.target = this;
    }
    if (this.handles[event.typye] instanceof Array) {
      var handlers = this.handles[event.type];
      for (var i = 0, len = handlers.length; i < len; i++) {
        handlers[i](event);
      }
    }
  },
};
