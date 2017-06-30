/*
* sg-utils-dateHandler 2017-06
* date handler utils
* */

/* export 的顶层对象 */
var dateHandler = {
  prevDay,
  prevWeek,
  prevMonth,
  prevYear,
  dateFormat
};

/*
* Date 的处理方法和格式化
* 传入要格式化的时间数据, 返回相应格式的时间值.
* */
// 1. 前一天
function prevDay(src) {
  return new Date(src.getTime() - 24 * 60 * 60 * 1000);
};
// 2. 前一周
function prevWeek(src) {
  return new Date(src.getTime() - 7 * 24 * 60 * 60 * 1000);
};
// 3. 前一月
function prevMonth(src) {
  const year = src.getFullYear();
  const month = src.getMonth();
  const date = src.getDate();
  const newYear = month === 0 ? year - 1 : year;
  const newMonth = month === 0 ? 11 : month - 1;
  const newMonthDayCount = new Date(newYear, newMonth + 1, 0).getDate(); //getDayCountOfMonth(newYear, newMonth);
  if (newMonthDayCount < date) {
    src.setDate(newMonthDayCount);
  }
  src.setMonth(newMonth);
  src.setFullYear(newYear);
  return new Date(src.getTime());
};
// 4. 前一年
function prevYear(src) {
  let date = new Date(src);
  date.setFullYear(date.getFullYear() - 1);
  return date;
};
// 5. 日期根据传入条件格式化
function dateFormat(date, fmt) {
  let o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
};

/* 暴露顶层对象 */
export default dateHandler
