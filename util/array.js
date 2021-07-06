//去重
export const arrayUnique = (arr,type) => {
  if (!Array.isArray(arr)) {
    throw new Error('arguments must a array')
  }
  if (arr.length <= 1) {
    return arr;
  } else if (type) {
    let obj = {};
    let newArr = arr.reduce((cur, next) => {
      obj[next[type]] ? "" : (obj[next[type]] = true && cur.push(next));
      return cur;
    }, []);
    return newArr;
  } else {
    return Array.from(new Set(arr)); //[...new Set(arr)]
  }
};

//两个数组 or 对象数组的差集
export const getDifferenceSetB = (arr1, arr2, typeName) => {
  if (typeName) {
    return Object.values(
      arr1.concat(arr2).reduce((acc, cur) => {
        if (
          acc[cur[typeName]] &&
          acc[cur[typeName]][typeName] === cur[typeName]
        ) {
          delete acc[cur[typeName]];
        } else {
          acc[cur[typeName]] = cur;
        }
        return acc;
      }, {})
    );
  } else {
    arr1 = arr1.map(JSON.stringify);
    arr2 = arr2.map(JSON.stringify);
    return arr1
      .concat(arr2)
      .filter(function (v, i, arr) {
        return arr.indexOf(v) === arr.lastIndexOf(v);
      })
      .map(JSON.parse);
  }
};

//数组中某元素出现的次数
export const countOccurrences = (arr, value) => {
  return arr.reduce((a, v) => (v === value ? a + 1 : a + 0), 0);
};

//交换arr数组两个元素的位置
export const swapArray = (arr, a, b) => {
  arr[a] = arr.splice(b, 1, arr[a])[0];
  return arr;
};
// [value2, value1] = [value1, value2];

//指定分割数组
export const splitArrayList = (array, num) => {
  let result = [];
  for (var i = 0; i < array.length; i += num) {
    result.push(array.slice(i, i + num));
  }
  return result;
};

//数组根据type查找元素
export const findArrayByIds = (ids, array, type) => {
  let elements = [];
  ids.map((item) => {
    elements.push(array.find((arrayItem) => arrayItem[type] == item));
  });
  return elements;
};

//数组根据id去掉元素
export const deleteElementsByIds = (a, b, type) => {
  a.map((aItem, index) => {
    b.map((bItem) => {
      if (aItem[type] == bItem[type]) {
        a.splice(index, 1);
      }
    });
  });
};

//得到某对象在数组里的索引
export const getArrIndex = (arr, obj) => {
  let index = null;
  let key = Object.keys(obj)[0];
  arr.map((value, i) => {
    if (value[key] === obj[key]) {
      index = i;
    }
  });
  return index;
};

export const arrayShuffle = function (array) {
  let m = array.length;
  let t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
  // arr.sort(function(a,b){ return Math.random()>.5 ? -1 : 1;});
};
