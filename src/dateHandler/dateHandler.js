/*
 * sg-utils-dateHandler 2017-06
 * date handler utils
 * */

/* export 的顶层对象 */
var dateHandler = {
  prevDay: prevDay,
  prevWeek: prevWeek,
  prevMonth: prevMonth,
  prevYear: prevYear,
  dateFormat: dateFormat,
  dateFormatByCurrentTime:dateFormatByCurrentTime,
  formatTime:formatTime
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
  var year = src.getFullYear();
  var month = src.getMonth();
  var date = src.getDate();
  var newYear = month === 0 ? year - 1 : year;
  var newMonth = month === 0 ? 11 : month - 1;
  var newMonthDayCount = new Date(newYear, newMonth + 1, 0).getDate(); //getDayCountOfMonth(newYear, newMonth);
  if (newMonthDayCount < date) {
    src.setDate(newMonthDayCount);
  }
  src.setMonth(newMonth);
  src.setFullYear(newYear);
  return new Date(src.getTime());
};
// 4. 前一年
function prevYear(src) {
  var date = new Date(src);
  date.setFullYear(date.getFullYear() - 1);
  return date;
};
// 5. 日期根据传入条件格式化
function dateFormat(date, fmt) {
  var o = {
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
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
};

// 6.日期根据传入时间戳与当前时间戳对比，显示刚刚，几分钟前，几小时前，昨天，年月日等
function dateFormatByCurrentTime(time) {
  /*
   *@time:Date
   */
  let result: string

  const format = (value) => {
    return value >= 10 ? value : '0' + value
  }

  //获取传参时间
  let date = new Date(time)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let second = date.getSeconds()

  //获取当前时间
  let today = new Date()
  let tyear = today.getFullYear()
  let tmonth = today.getMonth() + 1
  let tday = today.getDate()
  let thours = today.getHours()
  let tminutes = today.getMinutes()
  let tsecond = today.getSeconds()

  let currentTime = new Date().getTime()
  let intervalTime = currentTime - time
  if (year == tyear) { //同一年
    if (month == tmonth) { //同一月
      if (day == tday) { //同一天
        if (hours == thours && minutes == tminutes) {
          result = '刚刚'
        } else {
          if (hours == thours) {
            result = tminutes - minutes <= 0 ? '刚刚' : `${tminutes - minutes}分钟前`
          } else {
            result = `${thours - hours}小时前`
          }
        }
      } else if (tday - day == 1) {
        result = `昨天`

      } else {
        result = `${year}/${format(month)}/${format(day)}`
      }
    } else { //不同月
      result = `${year}/${format(month)}/${format(day)}`
    }
  } else { //不同年
    result = `${year}/${format(month)}/${format(day)}`
  }
  return result;
}

//7.根据传入的时间长度，格式化为00:00:00
function formatTime(value: number) {
  let s = Math.trunc(value % 60);
  let m = Math.trunc((value / 60) % 60);
  let h = Math.trunc(((value / 60) / 60) % 60);
  return h > 0 ? `${h<10?'0'+h:h}:${m<10?'0'+m:m}:${s<10?'0'+s:s}` : `${m<10?'0'+m:m}:${s<10?'0'+s:s}`;
}

/* 暴露顶层对象 */
export default dateHandler