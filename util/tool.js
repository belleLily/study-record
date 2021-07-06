/**
 * @desc 函数防抖
 * @param { function } func
 * @param { number } wait 延迟执行毫秒数
 * @param { boolean } immediate  true 表立即执行，false 表非立即执行
 */
export function debounce(func, wait = 500, immediate = false) {
  let timeout;
  let wait = wait || 1000;
  return function () {
    let context = this;
    let args = arguments;

    if (timeout) clearTimeout(timeout);
    if (immediate) {
      let callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    }
  };
}

/**
 * @desc 函数节流
 * @param { function } func 函数
 * @param { number } wait 延迟执行毫秒数
 * @param { number } type 1 表时间戳版，2 表定时器版
 */
export function throttle(func, wait, type) {
  let previous, timeout;
  if (type === 1) {
    previous = 0;
  } else if (type === 2) {
    timeout = null;
  }
  return function () {
    let context = this;
    let args = arguments;
    if (type === 1) {
      let now = Date.now();

      if (now - previous > wait) {
        func.apply(context, args);
        previous = now;
      }
    } else if (type === 2) {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null;
          func.apply(context, args);
        }, wait);
      }
    }
  };
}

//得到类型
export const type = (obj) => {
  let typeStr = Object.prototype.toString.call(obj).split(" ")[1];
  return typeStr.substr(0, typeStr.length - 1).toLowerCase();
};

//深拷贝
export const deepClone = (obj) => {
  if (obj === null) return null;
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);
  if (typeof obj !== "object") {
    return obj;
  }
  let t = new obj.constructor();
  for (let key in obj) {
    t[key] = deepClone(obj[key]);
  }
  return t;
};
// 1.无法保持引用
// 2.当数据的层次很深，会栈溢出
export const deepClone1 = (target) => {
  if (!!target && typeof target === "object") {
    var result = Array.isArray(target) ? [] : {};
    for (var key in target) {
      if (target.hasOwnProperty(key)) {
        result[key] =
          typeof target[key] === "object"
            ? deepClone(target[key])
            : target[key];
      }
    }
    return result;
  } else {
    return target;
  }
};
export const deepClone2 = (x) => {
  const root = {};
  // 栈
  const loopList = [
    {
      parent: root,
      key: undefined,
      data: x,
    },
  ];
  while (loopList.length) {
    // 深度优先
    const node = loopList.pop();
    const parent = node.parent;
    const key = node.key;
    const data = node.data;
    // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
    let res = parent;
    if (typeof key !== "undefined") {
      res = parent[key] = {};
    }
    for (let k in data) {
      if (data.hasOwnProperty(k)) {
        if (typeof data[k] === "object") {
          // 下一次循环
          loopList.push({
            parent: res,
            key: k,
            data: data[k],
          });
        } else {
          res[k] = data[k];
        }
      }
    }
  }
  return root;
};
export const deepCloneObj = (source) => {
  var copy = Object.create(Object.getPrototypeOf(source));
  Object.getOwnPropertyNames(copy).forEach(function (propKey) {
    var desc = Object.getOwnPropertyDescriptor(source, propKey);
    Object.defineProperty(copy, propKey, desc);
  });
  return target;
};

// 获取一个元素的任意 CSS 属性值
export const getStyle = (element, attr) => {
  if (element.currentStyle) {
    return element.currentStyle[attr];
  } else {
    return getComputedStyle(element, false)[attr]; //window.getComputedStyle(element,null).getPropertyValue(attr)
  }
};

export const toRGB = (color) => {
  let num = parseInt(color, 16);
  return [num >> 16, (num >> 8) & 255, num & 255];
};
//  F9C90C->rgba(249, 201, 12, 1)

export const toHex = (red, green, blue) => {
  return (blue | (green << 8) | (red << 16) | (1 << 24)).toString(16).slice(1);
};

export const toUpperChinese = (str) => {
  var arr = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
  str = str.replace(/\d/g, function () {
    return arr[arguments[0]];
  });
  return str;
};
