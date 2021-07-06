function insertSort(arr) {
  var len = arr.length;
  for (var i = 1; i < len; i++) {
    var temp = arr[i];
    var j = i - 1; //默认已排序的元素
    while (j >= 0 && arr[j] > temp) {
      //在已排序好的队列中从后向前扫描
      arr[j + 1] = arr[j]; //已排序的元素大于新元素，将该元素移到一下个位置
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

// 二分插入排序
function binaryInsertSort(arr) {
  var len = arr.length;
  for (var i = 1; i < len; i++) {
    var key = arr[i],
      left = 0,
      right = i - 1;
    while (left <= right) {
      //在已排序的元素中二分查找第一个比它大的值
      var mid = parseInt((left + right) / 2); //二分查找的中间值
      if (key < arr[mid]) {
        //当前值比中间值小  则在左边的子数组中继续寻找
        right = mid - 1;
      } else {
        left = mid + 1; //当前值比中间值大   在右边的子数组继续寻找
      }
    }
    for (var j = i - 1; j >= left; j--) {
      arr[j + 1] = arr[j];
    }
    arr[left] = key;
  }
  return arr;
}
