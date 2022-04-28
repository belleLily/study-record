export const format = (date, fmt = "YYYY-MM-DD HH:mm:ss") => {
  if (!date) {
    return "";
  }
  if (typeof date === "string") {
    date = new Date(date.replace(/-/g, "/"));
  }
  if (typeof date === "number") {
    date = new Date(date);
  }
  let o = {
    "M+": date.getMonth() + 1,
    "D+": date.getDate(),
    "h+": date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
    "H+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds(),
  };
  let week = {
    0: "\u65e5",
    1: "\u4e00",
    2: "\u4e8c",
    3: "\u4e09",
    4: "\u56db",
    5: "\u4e94",
    6: "\u516d",
  };
  if (/(Y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (RegExp.$1.length > 1
        ? RegExp.$1.length > 2
          ? "\u661f\u671f"
          : "\u5468"
        : "") + week[date.getDay() + ""]
    );
  }
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
};
/**
 * 日期转时间戳
 * @param {String} time - 日期字符串，如'2018-8-8','2018,8,8','2018/8/8'
 * @returns {Number} 返回值为时间毫秒值
 */
export function timeToTimestamp(time) {
  let date = new Date(time);
  return date.getTime();
}

//将时间戳(毫秒)转换成-时分秒
export const transformTime = (time) => {
  let leave = time % (1000 * 60 * 60 * 24);
  let hours = formatNumber(Math.floor(leave / (1000 * 60 * 60)));
  leave = leave % (1000 * 60 * 60);
  let min = formatNumber(Math.floor(leave / (1000 * 60)));
  leave = leave % (1000 * 60);
  let second = formatNumber(Math.floor(leave / 1000));

  return hours + ":" + min + ":" + second;
};

//将时间戳(毫秒)转换成-分秒
export const transformHours = (time) => {
  let leave = time % (1000 * 60 * 60 * 24);
  let hours = formatNumber(Math.floor(leave / (1000 * 60 * 60)));
  leave = leave % (1000 * 60 * 60);
  let min = Math.floor(leave / (1000 * 60));
  leave = leave % (1000 * 60);
  let second = formatNumber(Math.floor(leave / 1000));

  return hours * 60 + min + ":" + second;
};

// 秒数转换为时分秒
export const formatDuring = (time) => {
  // 补零
  let zero = function (v) {
    return v >> 0 < 10 ? "0" + v : v;
  };
  let h = 0;
  let i = 0;
  let s = parseInt(time, 10);
  if (s > 60) {
    i = parseInt(s / 60, 10);
    s = parseInt(s % 60, 10);
    if (i > 60) {
      h = parseInt(i / 60, 10);
      i = parseInt(i % 60, 10);
      return [zero(h), zero(i), zero(s)].join(":");
    }
  }
  return [zero(i), zero(s)].join(":");
};

//得到当前月份第一天
export const getCurrentMonthFirst = () => {
  const date = new Date();
  date.setDate(1);
  return this.formatDate(date, "YYYY-MM-DD");
};

//比较月份
export const compareTime = (stTime, endTime, num) => {
  let st = new Date(stTime);
  let et = new Date(endTime);
  let st6mon = new Date(st);
  st6mon.setMonth(st6mon.getMonth() + num);
  if (et.getTime() > st6mon.getTime()) {
    return true;
  }
  return false;
};

// 获取某个月的1号是星期几
export const getFirstDayOfMonth = function (date) {
  const temp = new Date(date.getTime());
  temp.setDate(1);
  return temp.getDay();
};
export const getPrevMonthLastDays = (date, amount) => {
  if (amount <= 0) return [];
  const temp = new Date(date.getTime());
  temp.setDate(0);
  const lastDay = temp.getDate();
  return range(amount).map((_, index) => lastDay - (amount - index - 1));
};

export const modifyDate = function (date, y, m, d) {
  return new Date(
    y,
    m,
    d,
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  );
};

export const getDayCountOfMonth = function (year, month) {
  if (month === 3 || month === 5 || month === 8 || month === 10) {
    return 30;
  }

  if (month === 1) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return 29;
    } else {
      return 28;
    }
  }

  return 31;
};

export const prevDate = function (date, amount = 1) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - amount);
};

export const nextDate = function (date, amount = 1) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount);
};

export const changeYearMonthAndClampDate = function (date, year, month) {
  // clamp date to the number of days in `year`, `month`
  // eg: (2010-1-31, 2010, 2) => 2010-2-28
  const monthDate = Math.min(date.getDate(), getDayCountOfMonth(year, month));
  return modifyDate(date, year, month, monthDate);
};

export const prevMonth = function (date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  return month === 0
    ? changeYearMonthAndClampDate(date, year - 1, 11)
    : changeYearMonthAndClampDate(date, year, month - 1);
};

export const nextMonth = function (date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  return month === 11
    ? changeYearMonthAndClampDate(date, year + 1, 0)
    : changeYearMonthAndClampDate(date, year, month + 1);
};

export const prevYear = function (date, amount = 1) {
  const year = date.getFullYear();
  const month = date.getMonth();
  return changeYearMonthAndClampDate(date, year - amount, month);
};

export const nextYear = function (date, amount = 1) {
  const year = date.getFullYear();
  const month = date.getMonth();
  return changeYearMonthAndClampDate(date, year + amount, month);
};

export const getMonthDays = (date) => {
  const temp = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const days = temp.getDate();
  return range(days).map((_, index) => index + 1);
};

export const range = function (n) {
  return Array.apply(null, { length: n }).map((_, n) => n);
};

export const getDayByNum = function (num) {
  return ["日", "一", "二", "三", "四", "五", "六"][num];
};

//获取当前周的周一
export const getWeekOfMonday = (date) => {
  var day = date.getDay();
  var deltaDay;
  if (day === 0) {
    deltaDay = 6;
  } else {
    deltaDay = day - 1;
  }
  var monday = new Date(date.getTime() - deltaDay * 24 * 60 * 60 * 1000);
  monday.setHours(0);
  monday.setMinutes(0);
  monday.setSeconds(0);
  return monday; //返回本周的周一的0时0分0秒
};

export function getMonthEndDay(year, month) {
  return 32 - new Date(year, month - 1, 32).getDate();
}
