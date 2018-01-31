(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sgck"] = factory();
	else
		root["sgck"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 *常用类型判断
 * */

var objToString = Object.prototype.toString;

/**
 * @param {*} value
 * @return {boolean}
 */
function isArray(value) {
	return objToString.call(value) === '[object Array]';
};

/**
 * @param {*} value
 * @return {boolean}
 */
function isFunction(value) {
	return typeof value === 'function';
};

/**
 * @param {*} value
 * @return {boolean}
 */
function isString(value) {
	return objToString.call(value) === '[object String]';
};

/**
 * @param {*} value
 * @return {boolean}
 */
function isObject(value) {
	// Avoid a V8 JIT bug in Chrome 19-20.
	// See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	return type === 'function' || !!value && type == 'object';
};

function isNumber(num) {
	var type = typeof num === 'undefined' ? 'undefined' : _typeof(num);
	return num === 'number' || num instanceof Number;
};

function isBoolean(arg) {
	return typeof arg === 'boolean';
}

function isNull(arg) {
	return arg === null;
}

function isNullOrUndefined(arg) {
	return arg == null;
}

function isUndefined(arg) {
	return arg === void 0;
}

function isDate(d) {
	return isObject(d) && objectToString(d) === '[object Date]';
}

exports.default = {
	isArray: isArray,
	isFunction: isFunction,
	isString: isString,
	isObject: isObject,
	isNumber: isNumber,
	isBoolean: isBoolean,
	isNull: isNull,
	isNullOrUndefined: isNullOrUndefined,
	isUndefined: isUndefined,
	isDate: isDate
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeJudgment = __webpack_require__(0);

var _typeJudgment2 = _interopRequireDefault(_typeJudgment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * 判断对象是否为空
 * 不排除对象原型上的属性
 * */
function isEmptyObj(obj) {
  //判断是否是对象
  if (!_typeJudgment2.default.isObject(obj)) return;
  for (var key in obj) {
    return false;
  }
  return true;
} /*
   * js对象工具方法
   * by gouxiaojun
   */

exports.default = {
  isEmptyObj: isEmptyObj
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 * 判断字符串是否为空
 * @param str 传入的字符串
 * @returns {}
 */
function isEmpty(str) {
    if (str == null || typeof str == "undefined" || str.trim() == "") {
        return true;
    } else {
        return false;
    }
};

/*
 * 判断两个字符串子否相同
 * @param str1
 * @param str2
 * @returns {Boolean}
 */
function isEquals(str1, str2) {
    if (str1 == str2) {
        return true;
    } else {
        return false;
    }
};
/*
 * 忽略大小写判断字符串是否相同
 * @param str1
 * @param str2
 * @returns {Boolean}
 */
function isEqualsIgnorecase(str1, str2) {
    if (str1.toUpperCase() == str2.toUpperCase()) {
        return true;
    } else {
        return false;
    }
};
/**
 * 判断是否是数字
 * @param value
 * @returns {Boolean}
 */
function isNum(value) {
    if (value != null && value.length > 0 && isNaN(value) == false) {
        return true;
    } else {
        return false;
    }
};
/**
 * 判断是否是中文
 * @param str
 * @returns {Boolean}
 */
function isChine(str) {
    var reg = /^([u4E00-u9FA5]|[uFE30-uFFA0])*$/;
    if (reg.test(str)) {
        return false;
    }
    return true;
};

exports.default = {
    isEmpty: isEmpty,
    isEquals: isEquals,
    isEqualsIgnorecase: isEqualsIgnorecase,
    isNum: isNum,
    isChine: isChine
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * JS数组工具类方法
 * by gouxiaojun
 */

/*
 * 判断数组是否为空
 *
 * */
function isEmpty(arr) {
  return arr.length === 0;
}

/*
 * 数组的过滤方法且返回包含的数组
 * @param {Array} [array] 需要过滤的数组
 * @param {Function} predicate 设定需要过滤的值的方法
 * @returns {Array}
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/*
 * 遍历数组方法
 * @param {Array} [array] 需要过滤的数组
 * @param {Function} predicate 设定规则
 * @returns {boolean}
 */
function arrayEvery(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (!predicate(array[index], index, array)) {
      return false;
    }
  }
  return true;
}

/*
 * 数组拼接方法
 * @returns {array}
 */
function arrayConcat() {
  if (arguments.length) return;
  var arrNew;
  for (var i = 0, l = arguments.length; i < l; i++) {
    var nextArr = arguments[i];
    !i && (arrNew = nextArr)(!!i) && (arrNew = arrNew.concat(nextArr));
  }
  return arrNew;
}

/*
 * 数组去重方法
 * @param {Array} [array] 需要去重的数组
 * @returns {array}
 * */
function unique(arr) {
  if (arr.length) return;
  var hash = {},
      ret = [];
  for (var i = 0, l = arr.length; i < l; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = true;
      ret.push(arr[i]);
    }
  }
  return ret;
}

exports.default = {
  isEmpty: isEmpty,
  arrayFilter: arrayFilter,
  arrayEvery: arrayEvery,
  arrayConcat: arrayConcat,
  unique: unique
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.baseWaveRequest = exports.baseWaveTool = exports.fft = exports.dataSession = exports.dataLocal = exports.commonReg = exports.md5 = exports.Inheritance = exports.eventTarget = exports.dateHandler = exports.common = undefined;

var _common = __webpack_require__(5);

var _common2 = _interopRequireDefault(_common);

var _dateHandler = __webpack_require__(8);

var _dateHandler2 = _interopRequireDefault(_dateHandler);

var _eventTarget = __webpack_require__(9);

var _eventTarget2 = _interopRequireDefault(_eventTarget);

var _Inheritance = __webpack_require__(10);

var _Inheritance2 = _interopRequireDefault(_Inheritance);

var _md = __webpack_require__(11);

var _md2 = _interopRequireDefault(_md);

var _commonReg = __webpack_require__(12);

var _commonReg2 = _interopRequireDefault(_commonReg);

var _localStorage = __webpack_require__(13);

var _localStorage2 = _interopRequireDefault(_localStorage);

var _dataSession = __webpack_require__(14);

var _dataSession2 = _interopRequireDefault(_dataSession);

var _fft = __webpack_require__(15);

var _fft2 = _interopRequireDefault(_fft);

var _waveHandle = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.common = _common2.default;
exports.dateHandler = _dateHandler2.default;
exports.eventTarget = _eventTarget2.default;
exports.Inheritance = _Inheritance2.default;
exports.md5 = _md2.default;
exports.commonReg = _commonReg2.default;
exports.dataLocal = _localStorage2.default;
exports.dataSession = _dataSession2.default;
exports.fft = _fft2.default;
exports.baseWaveTool = _waveHandle.baseWaveTool;
exports.baseWaveRequest = _waveHandle.baseWaveRequest;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringUtil = __webpack_require__(2);

var _stringUtil2 = _interopRequireDefault(_stringUtil);

var _arrayUtil = __webpack_require__(3);

var _arrayUtil2 = _interopRequireDefault(_arrayUtil);

var _commonlyFun = __webpack_require__(6);

var _commonlyFun2 = _interopRequireDefault(_commonlyFun);

var _judgeEmptyUtil = __webpack_require__(7);

var _judgeEmptyUtil2 = _interopRequireDefault(_judgeEmptyUtil);

var _objectUtil = __webpack_require__(1);

var _objectUtil2 = _interopRequireDefault(_objectUtil);

var _typeJudgment = __webpack_require__(0);

var _typeJudgment2 = _interopRequireDefault(_typeJudgment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    StringUtil: _stringUtil2.default,
    arrayUtil: _arrayUtil2.default,
    commonlyFun: _commonlyFun2.default,
    judgeEmptyUtil: _judgeEmptyUtil2.default,
    objectUtil: _objectUtil2.default,
    typeJudgment: _typeJudgment2.default
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeJudgment = __webpack_require__(0);

var _typeJudgment2 = _interopRequireDefault(_typeJudgment);

var _objectUtil = __webpack_require__(1);

var _objectUtil2 = _interopRequireDefault(_objectUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * 对象转数组
 * */

/*
 * js常用的方法
 * by gouxiaojun
 */

function objectTurnArray(obj) {
    //先判断是否是对象并且不是空对象
    if (!_typeJudgment2.default.isObject(obj) && _objectUtil2.default.isEmptyObj(obj)) return;
    var arr = [];
    for (var key in obj) {
        arr.push(obj[key]);
    }
    return arr;
}

exports.default = {
    objectTurnArray: objectTurnArray
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringUtil = __webpack_require__(2);

var _stringUtil2 = _interopRequireDefault(_stringUtil);

var _objectUtil = __webpack_require__(1);

var _objectUtil2 = _interopRequireDefault(_objectUtil);

var _arrayUtil = __webpack_require__(3);

var _arrayUtil2 = _interopRequireDefault(_arrayUtil);

var _typeJudgment = __webpack_require__(0);

var _typeJudgment2 = _interopRequireDefault(_typeJudgment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * 判断是否为空
 * */
/*
 * js判断空的方法
 * by gouxiaojun
 */

function isEmpty(value) {
    //1.判读出null,'',0,false,undefined的情况
    if (!value) {
        return true;
    }
    //2.在判断类型
    var type = _typeJudgment2.default.isString(value) && 1 || _typeJudgment2.default.isArray(value) && 2 || _typeJudgment2.default.isObject(value) && 3;
    var status = true;
    //3.判断是否为空
    switch (type) {
        case 1:
            status = _stringUtil2.default.isEmpty(value);
            break;
        case 2:
            status = _arrayUtil2.default.isEmpty(value);
            break;
        case 3:
            status = _objectUtil2.default.isEmptyObj(value);
            break;
        default:
            status = true;
    }
    return status;
}

exports.default = {
    isEmpty: isEmpty
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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
  dateFormatByCurrentTime: dateFormatByCurrentTime,
  formatTime: formatTime
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
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  return fmt;
};

// 6.日期根据传入时间戳与当前时间戳对比，显示刚刚，几分钟前，几小时前，昨天，年月日等
function dateFormatByCurrentTime(time) {
  /*
   *@time:Date
   */
  var result = '';

  var format = function format(value) {
    return value >= 10 ? value : '0' + value;
  };

  //获取传参时间
  var date = new Date(time);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var second = date.getSeconds();

  //获取当前时间
  var today = new Date();
  var tyear = today.getFullYear();
  var tmonth = today.getMonth() + 1;
  var tday = today.getDate();
  var thours = today.getHours();
  var tminutes = today.getMinutes();
  var tsecond = today.getSeconds();

  var currentTime = new Date().getTime();
  var intervalTime = currentTime - time;
  if (year == tyear) {
    //同一年
    if (month == tmonth) {
      //同一月
      if (day == tday) {
        //同一天
        if (hours == thours && minutes == tminutes) {
          result = '刚刚';
        } else {
          if (hours == thours) {
            result = tminutes - minutes <= 0 ? '刚刚' : tminutes - minutes + "\u5206\u949F\u524D";
          } else {
            result = thours - hours + "\u5C0F\u65F6\u524D";
          }
        }
      } else if (tday - day == 1) {
        result = "\u6628\u5929";
      } else {
        result = year + "/" + format(month) + "/" + format(day);
      }
    } else {
      //不同月
      result = year + "/" + format(month) + "/" + format(day);
    }
  } else {
    //不同年
    result = year + "/" + format(month) + "/" + format(day);
  }
  return result;
}

//7.根据传入的时间长度，格式化为00:00:00
function formatTime(value) {
  var s = Math.trunc(value % 60);
  var m = Math.trunc(value / 60 % 60);
  var h = Math.trunc(value / 60 / 60 % 60);
  return h > 0 ? (h < 10 ? '0' + h : h) + ":" + (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s) : (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s);
}

/* 暴露顶层对象 */
exports.default = dateHandler;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/*
 *自定义事件
 * */
function EventTarget() {
	this.handlers = {};
}

EventTarget.prototype = {
	constructor: EventTarget,
	/*监听事件*/
	addHandler: function addHandler(type, handler) {
		if (typeof this.handlers[type] == 'undefined') {
			this.handlers[type] = [];
		}

		this.handlers[type].push(handler);
	},
	/*触发事件*/
	fire: function fire(event) {
		if (!event.target) {
			event.target = this;
		}
		if (this.handlers[event.type] instanceof Array) {
			var handlers = this.handlers[event.type];
			for (var i = 0, len = handlers.length; i < len; i++) {
				handlers[i](event);
			}
		}
	},

	/*移除事件*/
	removeHandler: function removeHandler(type, handler) {
		if (this.handlers[event.type] instanceof Array) {
			var handlers = this.handlers[event.type];
			for (var i = 0, len = handlers; i < len; i++) {
				if (handlers[i] == handler) {
					break;
				}
			}
			handlers.splice(i, 1);
		}
	}
};

exports.default = EventTarget;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/*
 *对象继承的方法
 * */
var Inheritance = {};
/**
 * 构造类继承关系
 *
 * @memberOf module:zrender/core/util
 * @param {Function} clazz 源类
 * @param {Function} baseClazz 基类
 */
Inheritance.inherits = function (clazz, baseClazz) {
	var clazzPrototype = clazz.prototype;

	function F() {}
	F.prototype = baseClazz.prototype;
	clazz.prototype = new F();

	for (var prop in clazzPrototype) {
		clazz.prototype[prop] = clazzPrototype[prop];
	}
	clazz.prototype.constructor = clazz;
	clazz.superClass = baseClazz;
};

/**
 * @param {*} target
 * @param {*} source  
 * source为object对象
 */
Inheritance.extend = function (target, source) {
	for (var key in source) {
		if (source.hasOwnProperty(key)) {
			target[key] = source[key];
		}
	}
	return target;
};

/**
 * @memberOf module:zrender/core/util
 * @param {Object|Function} target
 * @param {Object|Function} sorce
 * @param {boolean} overlay
 */
Inheritance.mixin = function (target, source, overlay) {
	target = 'prototype' in target ? target.prototype : target;
	source = 'prototype' in source ? source.prototype : source;

	defaults(target, source, overlay);
};

/**
 * @param {*} target
 * @param {*} source
 * @param {boolen} [overlay=false]
 */
Inheritance.defaults = function (target, source, overlay) {
	for (var key in source) {
		if (source.hasOwnProperty(key) && (overlay ? source[key] != null : target[key] == null)) {
			target[key] = source[key];
		}
	}
	return target;
};

/*
 * 寄生组合式继承
 * subType:子类
 * superType：父类
 * */
Inheritance.inheritPrototype = function (subType, superType) {
	var prototype = object(superType.prototype);
	prototype.constructor = subType;
	subType.prototype = prototype;
};

exports.default = Inheritance;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function md5(string) {
  function md5_RotateLeft(lValue, iShiftBits) {
    return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
  }

  function md5_AddUnsigned(lX, lY) {
    var lX4, lY4, lX8, lY8, lResult;
    lX8 = lX & 0x80000000;
    lY8 = lY & 0x80000000;
    lX4 = lX & 0x40000000;
    lY4 = lY & 0x40000000;
    lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
    if (lX4 & lY4) {
      return lResult ^ 0x80000000 ^ lX8 ^ lY8;
    }
    if (lX4 | lY4) {
      if (lResult & 0x40000000) {
        return lResult ^ 0xC0000000 ^ lX8 ^ lY8;
      } else {
        return lResult ^ 0x40000000 ^ lX8 ^ lY8;
      }
    } else {
      return lResult ^ lX8 ^ lY8;
    }
  }

  function md5_F(x, y, z) {
    return x & y | ~x & z;
  }

  function md5_G(x, y, z) {
    return x & z | y & ~z;
  }

  function md5_H(x, y, z) {
    return x ^ y ^ z;
  }

  function md5_I(x, y, z) {
    return y ^ (x | ~z);
  }

  function md5_FF(a, b, c, d, x, s, ac) {
    a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_F(b, c, d), x), ac));
    return md5_AddUnsigned(md5_RotateLeft(a, s), b);
  };

  function md5_GG(a, b, c, d, x, s, ac) {
    a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_G(b, c, d), x), ac));
    return md5_AddUnsigned(md5_RotateLeft(a, s), b);
  };

  function md5_HH(a, b, c, d, x, s, ac) {
    a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_H(b, c, d), x), ac));
    return md5_AddUnsigned(md5_RotateLeft(a, s), b);
  };

  function md5_II(a, b, c, d, x, s, ac) {
    a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_I(b, c, d), x), ac));
    return md5_AddUnsigned(md5_RotateLeft(a, s), b);
  };

  function md5_ConvertToWordArray(string) {
    var lWordCount;
    var lMessageLength = string.length;
    var lNumberOfWords_temp1 = lMessageLength + 8;
    var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
    var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
    var lWordArray = Array(lNumberOfWords - 1);
    var lBytePosition = 0;
    var lByteCount = 0;
    while (lByteCount < lMessageLength) {
      lWordCount = (lByteCount - lByteCount % 4) / 4;
      lBytePosition = lByteCount % 4 * 8;
      lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
      lByteCount++;
    }
    lWordCount = (lByteCount - lByteCount % 4) / 4;
    lBytePosition = lByteCount % 4 * 8;
    lWordArray[lWordCount] = lWordArray[lWordCount] | 0x80 << lBytePosition;
    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
    return lWordArray;
  };

  function md5_WordToHex(lValue) {
    var WordToHexValue = "",
        WordToHexValue_temp = "",
        lByte,
        lCount;
    for (lCount = 0; lCount <= 3; lCount++) {
      lByte = lValue >>> lCount * 8 & 255;
      WordToHexValue_temp = "0" + lByte.toString(16);
      WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
    }
    return WordToHexValue;
  };

  function md5_Utf8Encode(string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";
    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);
      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if (c > 127 && c < 2048) {
        utftext += String.fromCharCode(c >> 6 | 192);
        utftext += String.fromCharCode(c & 63 | 128);
      } else {
        utftext += String.fromCharCode(c >> 12 | 224);
        utftext += String.fromCharCode(c >> 6 & 63 | 128);
        utftext += String.fromCharCode(c & 63 | 128);
      }
    }
    return utftext;
  };
  var x = Array();
  var k, AA, BB, CC, DD, a, b, c, d;
  var S11 = 7,
      S12 = 12,
      S13 = 17,
      S14 = 22;
  var S21 = 5,
      S22 = 9,
      S23 = 14,
      S24 = 20;
  var S31 = 4,
      S32 = 11,
      S33 = 16,
      S34 = 23;
  var S41 = 6,
      S42 = 10,
      S43 = 15,
      S44 = 21;
  string = md5_Utf8Encode(string);
  x = md5_ConvertToWordArray(string);
  a = 0x67452301;
  b = 0xEFCDAB89;
  c = 0x98BADCFE;
  d = 0x10325476;
  for (k = 0; k < x.length; k += 16) {
    AA = a;
    BB = b;
    CC = c;
    DD = d;
    a = md5_FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
    d = md5_FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
    c = md5_FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
    b = md5_FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
    a = md5_FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
    d = md5_FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
    c = md5_FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
    b = md5_FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
    a = md5_FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
    d = md5_FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
    c = md5_FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
    b = md5_FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
    a = md5_FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
    d = md5_FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
    c = md5_FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
    b = md5_FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
    a = md5_GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
    d = md5_GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
    c = md5_GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
    b = md5_GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
    a = md5_GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
    d = md5_GG(d, a, b, c, x[k + 10], S22, 0x2441453);
    c = md5_GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
    b = md5_GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
    a = md5_GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
    d = md5_GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
    c = md5_GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
    b = md5_GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
    a = md5_GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
    d = md5_GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
    c = md5_GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
    b = md5_GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
    a = md5_HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
    d = md5_HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
    c = md5_HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
    b = md5_HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
    a = md5_HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
    d = md5_HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
    c = md5_HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
    b = md5_HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
    a = md5_HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
    d = md5_HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
    c = md5_HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
    b = md5_HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
    a = md5_HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
    d = md5_HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
    c = md5_HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
    b = md5_HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
    a = md5_II(a, b, c, d, x[k + 0], S41, 0xF4292244);
    d = md5_II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
    c = md5_II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
    b = md5_II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
    a = md5_II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
    d = md5_II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
    c = md5_II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
    b = md5_II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
    a = md5_II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
    d = md5_II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
    c = md5_II(c, d, a, b, x[k + 6], S43, 0xA3014314);
    b = md5_II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
    a = md5_II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
    d = md5_II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
    c = md5_II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
    b = md5_II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
    a = md5_AddUnsigned(a, AA);
    b = md5_AddUnsigned(b, BB);
    c = md5_AddUnsigned(c, CC);
    d = md5_AddUnsigned(d, DD);
  }
  return (md5_WordToHex(a) + md5_WordToHex(b) + md5_WordToHex(c) + md5_WordToHex(d)).toLowerCase();
}

exports.default = md5;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
* sg-utils-reg 2017-06
* common regular utils
* */

/* 要 export 的顶层对象 */
var reg = {
  regTestPhoneNo: regTestPhoneNo,
  regTestEMail: regTestEMail,
  regTestUsername: regTestUsername,
  regTestPassword: regTestPassword,
  regTestDateFormat: regTestDateFormat,
  regTestMd5: regTestMd5
};

/* 正则表达式: regular expression */
// 1.手机号: 1开头的十一位数字
var regPhoneNoExp = /^1\d{10}$/;
// 2.邮箱地址:
var regEMailExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
// 3.用户名: 字母、数字、下划线开头，1-16位
var regUsernameExp = /^\w{1,16}$/;
// 4.用户密码: 密码由数字、字母、特殊字符开头、组成且密码长度为1~16个字符
var regPasswordExp = /^[\w#@$%^&*()~]{1,16}$/; // /^[A-Za-z0-9_#@$%^&*()~]{1,16}$/
// 5.标准日期时间格式：yy/mm/dd hh:mm:ss 或者 yy-mm-dd hh:mm:ss
var regDateFormatExp = /^\d{4,}(\/|-)(?:0?\d|1[12])(\/|-)(?:[012]?\d|3[01]) (?:[01]?\d|2[0-4]):(?:[0-5]?\d|60):(?:[0-5]?\d|60)$/;
// 验证md5的正则表达式
var regMd5Exp = /^([a-fA-F0-9]{32})$/;
/*
* 运用正则表达式判断: regExp.test
* 传入字符串, 返回 Boolean 值
* */
// 1. 手机号判断
function regTestPhoneNo(str) {
  return regPhoneNoExp.test(str);
};
// 2. 邮箱地址判断
function regTestEMail(str) {
  return regEMailExp.test(str);
};
// 3. 用户名判断
function regTestUsername(str) {
  return regUsernameExp.test(str);
};
// 4. 用户密码判断
function regTestPassword(str) {
  return regPasswordExp.test(str);
};
// 5. 标准日期时间格式判断
function regTestDateFormat(str) {
  return regDateFormatExp.test(str);
};

function regTestMd5(str) {
  return regMd5Exp.test(str);
}

/* 暴露顶层对象 */
exports.default = reg;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * localStorage对象缓存数据操作
 * by gouxiaojun
 * */

var storage = function () {

    if (window.localStorage) {

        var ls = window.localStorage;

        //更新缓存数据
        var set = function set(name, val) {
            var str = typeof name === 'string' || typeof name === "number";
            var obj = (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
            if (!str) return;
            str && !obj && ls.setItem(name, val);
            str && obj && ls.setItem(name, JSON.stringify(val));
        };

        //获取缓存数据
        var get = function get(name) {
            var item = ls.getItem(name);
            if (name && item) {
                return item.indexOf('{') != -1 || item.indexOf('[') != -1 ? JSON.parse(item) : item;
            } else {
                return item;
            }
        };

        //删除缓存数据
        var remove = function remove(name) {
            return ls.removeItem(name);
        };

        //清除所有缓存数据
        var clear = function clear() {
            ls.clear();
        };

        return {
            set: set,
            get: get,
            remove: remove,
            clear: clear
        };
    } else {
        throw new Error('浏览器不支持LocalStorage对象。。。。。。。');
    }
}();

exports.default = storage;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * sessionStorage对象缓存数据操作
 * */
function _isJSON(obj) {
  return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" && Object.prototype.toString.call(obj).toLowerCase() === "[object object]" && !obj.length;
}

function _stringify(val) {
  return val === undefined || typeof val === "function" ? val + '' : JSON.stringify(val);
}

function _deserialize(value) {
  if (typeof value !== 'string') {
    return undefined;
  }
  try {
    return JSON.parse(value);
  } catch (e) {
    return value || undefined;
  }
}

var dataSession = function () {

  if (window.sessionStorage) {

    var storage = window.sessionStorage;

    var set = function set(key, val) {
      if (key && !_isJSON(key)) {
        storage.setItem(key, _stringify(val));
      } else if (key && _isJSON(key) && !val) {
        for (var a in key) {
          this.set(a, key[a]);
        }
      }
      return this;
    };

    var get = function get(key) {
      if (!key) {
        var ret = {};
        _forEach(function (key, val) {
          ret[key] = val;
        });
        return ret;
      }
      if (key.charAt(0) === '?') {
        return this.has(key.substr(1));
      }
      return _deserialize(storage.getItem(key));
    };

    var clear = function clear() {
      storage.clear();
      return this;
    };

    var remove = function remove(key) {
      var val = get(key);
      storage.removeItem(key);
      return val;
    };

    var has = function has(key) {
      return {}.hasOwnProperty.call(get(), key);
    };

    var keys = function keys() {
      var d = [];
      _forEach(function (k, list) {
        d.push(k);
      });
      return d;
    };

    var size = function size() {
      return keys().length;
    };

    var _forEach = function _forEach(callback) {
      for (var i = 0; i < storage.length; i++) {
        var key = storage.key(i);
        if (callback(key, get(key)) === false) break;
      }
      return this;
    };
    return {
      set: set,
      get: get,
      clear: clear,
      remove: remove,
      has: has,
      keys: keys,
      size: size
    };
  } else {
    throw new Error('浏览器不支持sessionStorage对象。。。。。。。');
  }
}();

exports.default = dataSession;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FFT = function () {
	function FFT(x, y, OutPhase) {
		_classCallCheck(this, FFT);

		//OutX 输出频点
		this.OutX = x || [];
		// OutY 输出幅值
		this.OutY = y || [];
		// OutPhase 输出相位
		this.OutPhase = OutPhase || {};
	}

	_createClass(FFT, [{
		key: "getYExtremumsIndex",
		value: function getYExtremumsIndex() {
			var sortByY = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

			var retArr = [];

			try {
				var v;
				var i = 0;
				if (OutY[0] > OutY[1]) {
					retArr.push(0);
					i++; // the next must not be extremum
				}

				var n = OutY.length;
				for (var _i = 0; _i < n - 1; _i++) {
					v = OutY[_i];
					if (v > OutY[_i - 1] && v > OutY[_i + 1]) {
						retArr.push(_i);
						_i++; // the next must not be extremum
					}
				}

				if (i < n && OutY[i] > OutY[i - 1]) retArr.push(i);

				if (sortByY) {
					retArr.sort(sortOnYIndex);
					// retArr.reverse();
				}
			} catch (e) {}

			return retArr;
		}
	}, {
		key: "sortOnYIndex",
		value: function sortOnYIndex(a, b) {
			var aPrice = OutY[b];
			var bPrice = OutY[a];
			if (aPrice > bPrice) return 1;else if (aPrice < bPrice) return -1;else //aPrice == bPrice
				return 0;
		}

		/**
   * 频谱分析
   * @param data 波形采用数组
   * @param freq 采样频率
   * @param nFirst FFT原始数据的起始点位置
   * @param nCount FFT原始数据的点数
   * @param mi 指定分析的线数相对2的幂次方，如： mi = 10，则线数为 2 的 10 次方 1024
   * @param 正常返回 > 0 的最大幅值，-1 表示失败
   */

	}, {
		key: "waveFFT",
		value: function waveFFT(data, freq) {
			if (!isFinite(data[0])) {
				return -1;
			}
			var nPointNumber, times;
			nPointNumber = data.length;
			times = nPointNumber / 512;
			if (times % 1 != 0) {
				nPointNumber = 512 * parseInt(times);
				data = data.slice(-nPointNumber);
			}
			var mi = Math.log(nPointNumber) / Math.LN2;
			if (nPointNumber != Math.pow(2, mi)) {
				return -1;
				//throw new Error("waveFFT: the nCount must be pow of 2");
			}

			var fDF = freq / nPointNumber;

			// 抽取
			var x_arr = [];
			var y_arr = [];
			x_arr.push(0); // 插入空白点
			x_arr = x_arr.concat(data);

			// 计算平均值average，并且令x[i] -= average以消除直流分量
			var i;
			var sum = 0;
			for (i = 1; i < x_arr.length; i++) {
				sum += x_arr[i];
			}var average = sum / nPointNumber;
			i = 1;
			for (; i < x_arr.length; i++) {
				x_arr[i] -= average;
			}y_arr.length = nPointNumber + 1;
			this._o_fft(1, mi, x_arr, y_arr, nPointNumber);

			// 处理计算结果
			var fMaxFZ = 0;
			var lineCount = nPointNumber / 2.56;
			var OutX = this.OutX = [];
			var OutY = this.OutY = [];
			var OutPhase = this.OutPhase = [];
			OutX.length = lineCount;
			OutY.length = lineCount;
			OutPhase.length = lineCount;
			var xi, yi;
			i = 0;
			for (; i < lineCount; i++) {
				xi = x_arr[i + 1];
				yi = y_arr[i + 1];
				// 频率
				OutX[i] = Number((i * fDF).toFixed(2));
				// 幅值
				OutY[i] = Number((Math.sqrt(xi * xi + yi * yi) * 4 / nPointNumber).toFixed(2));
				// 相位 (弧度)
				OutPhase[i] = -(Math.atan2(yi, xi) - Math.PI / 2);
				// 最大幅值
				fMaxFZ = Math.max(OutY[i], fMaxFZ);
			}

			if (fMaxFZ < Number.NEGATIVE_INFINITY || fMaxFZ > Number.POSITIVE_INFINITY) return -1;

			return fMaxFZ;
		}

		/**
   * 频谱分析
   * @param data 波形采用数组
   * @param freq 采样频率
   * @param nFirst FFT原始数据的起始点位置
   * @param nCount FFT原始数据的点数
   * @param mi 指定分析的线数相对2的幂次方，如： mi = 10，则线数为 2 的 10 次方 1024
   * @param 正常返回 > 0 的最大幅值，-1 表示失败
   */

	}, {
		key: "waveFFTWithInterp",
		value: function waveFFTWithInterp(data, freq, nFirst, nCount, mi) {
			var nPointNumber = 1;
			for (var _i2 = 0; _i2 < mi; _i2++) {
				nPointNumber *= 2;
			}var pBegin = nFirst;
			var nWaveCount = data.length;
			if (nFirst >= nWaveCount) return -1;
			if (nFirst + nCount > nWaveCount) nCount = nWaveCount - nFirst;

			var all_count = nCount;
			var fDF = freq / all_count;

			// 抽取
			var x_arr = [];
			var y_arr = [];
			x_arr.length = nPointNumber + 1;
			x_arr[0] = 0; // 插入空白点
			var pos, ipos0, ipos1;
			var v0, v1, t, v;
			i = 0;
			for (; i < nPointNumber - 1; i++) {
				// i * nCount 可能很大，超过int的范围
				// 因此用double进行计算
				pos = i;
				pos = pos * (nCount - 1) / nPointNumber;
				ipos0 = pos;
				ipos1 = ipos0 + 1;
				v0 = data[pBegin + ipos0];
				v1 = data[pBegin + ipos1];
				// 插值
				t = pos - ipos0;
				v = v0 + (v1 - v0) * t;
				x_arr[i + 1] = v;
			}
			x_arr[i + 1] = data[pBegin + nCount - 1]; // 插入最后一个点

			//			if (x_arr.length != (nPointNumber+1))
			//				return -1;

			// 计算平均值average，并且令x[i] -= average以消除直流分量
			var sum = 0;
			i = 1;
			for (i = 1; i < x_arr.length; i++) {
				sum += x_arr[i];
			}var average = sum / nPointNumber;
			i = 1;
			for (; i < x_arr.length; i++) {
				x_arr[i] -= average;
			}y_arr.length = nPointNumber + 1;
			this._o_fft(1, mi, x_arr, y_arr, nPointNumber);

			// 处理计算结果
			var fMaxFZ = 0;
			var number = nPointNumber / 2;
			var OutX = this.OutX = [];
			var OutY = this.OutY = [];
			var OutPhase = this.OutPhase = {};
			OutX.length = number;
			OutY.length = number;
			OutPhase.length = number;
			var xi, yi;
			i = 0;
			for (; i < number; i++) {
				xi = x_arr[i + 1];
				yi = y_arr[i + 1];
				// 频率
				OutX[i] = Number((i * fDF).toFixed(2));
				// 幅值
				OutY[i] = Number((Math.sqrt(xi * xi + yi * yi) * 4 / nPointNumber).toFixed(2));
				//				OutY[i]=Math.sqrt(xi * xi + yi * yi)*2 / nPointNumber;//修改
				// 相位 (弧度)
				OutPhase[i] = Math.atan2(yi, xi);
				// 最大幅值
				fMaxFZ = Math.max(OutY[i], fMaxFZ);
			}

			if (fMaxFZ < Number.NEGATIVE_INFINITY || fMaxFZ > Number.POSITIVE_INFINITY) return -1;

			return fMaxFZ;
		}

		/**
   * @method  fft
   * @description  Fast Fourier transform -- this calculates an in-place
   *               complex-to-complex fft. x_arr and y_arr are the real and
   *               imaginary number arrays of 2^m points.
   *               <blockquote><pre>
   *               Formula: forward
   *                           N-1
   *                           ---
   *                       1   \          - j k 2 pi n / N
   *               X(n) = ---   >   x(k) e                    = forward transform
   *                       N   /                                n=0..N-1
   *                           ---
   *                           k=0
   *
   *               Formula: reverse
   *                           N-1
   *                           ---
   *                           \          j k 2 pi n / N
   *               X(n) =       >   x(k) e                    = reverse transform
   *                           /                                n=0..N-1
   *                           ---
   *                           k=0
   *
   * @usage  <pre>Fourier.fft(dir, m, x_arr, y_arr);</pre>
   * @param   dir   (Number)  -- 1 gives forward transform, -1 gives reverse transform.
   * @param   m   (Number)  -- a positive integer.
   * @param   x_arr   (Array)  -- an array containing x-axis values for real number input.
   * @param   y_arr   (Array)  -- an array containing y-axis values for imaginary number input.
   * @param	n		-- 分析线数，即使用 x_arr 的长度，此长度必须与 m 相匹配，否则将会计算错误，如果 n = 0，则自动计算
   * @return  (Boolean)
   **/

	}, {
		key: "_fft",
		value: function _fft(dir, m, x_arr, y_arr) {
			var n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

			var j = void 0,
			    k = void 0,
			    z = void 0;
			var i1, i2, l1, l2, c1, c2;
			var tx, ty, t1, t2, u1, u2;

			// Calculate the number of points
			if (n == 0) {
				n = 1;
				for (i = 0; i < m; i++) {
					n *= 2;
				}
			}

			y_arr.length = n;
			for (var _i3 = 0; _i3 < n; _i3++) {
				y_arr[_i3] = 0;
			} // Do the bit reversal
			i2 = n >> 1;
			j = 0;
			for (var _i4 = 0; _i4 < n - 1; _i4++) {
				if (_i4 < j) {
					tx = x_arr[_i4];
					ty = y_arr[_i4];
					x_arr[_i4] = x_arr[j];
					y_arr[_i4] = y_arr[j];
					x_arr[j] = tx;
					y_arr[j] = ty;
				}
				k = i2;
				while (k <= j) {
					j -= k;
					k >>= 1;
				}
				j += k;
			}
			//trace("m:"+m+", n:"+n+", j:"+j+", k:"+k);

			// Compute the fft
			c1 = -1.0;
			c2 = 0.0;
			l2 = 1;
			for (var l = 0; l < m; l++) {
				l1 = l2;
				l2 <<= 1;
				u1 = 1.0;
				u2 = 0.0;
				for (var _j = 0; _j < l1; _j++) {
					for (i = _j; i < n; i += l2) {
						i1 = i + l1;
						t1 = u1 * x_arr[i1] - u2 * y_arr[i1];
						t2 = u1 * y_arr[i1] + u2 * x_arr[i1];
						x_arr[i1] = x_arr[i] - t1;
						y_arr[i1] = y_arr[i] - t2;
						x_arr[i] += t1;
						y_arr[i] += t2;
					}
					z = u1 * c1 - u2 * c2;
					u2 = u1 * c2 + u2 * c1;
					u1 = z;
				}
				c2 = Math.sqrt((1.0 - c1) / 2.0);
				if (dir == 1) c2 = -c2;
				c1 = Math.sqrt((1.0 + c1) / 2.0);
			}

			//trace('c1:'+c1+', c2:'+c2+', z:'+z);

			// Scaling for forward transform
			if (dir == 1) {
				for (var _i5 = 0; _i5 < n; _i5++) {
					x_arr[_i5] /= n;
					y_arr[_i5] /= n;
				}
				//trace('n:'+n+' ..x:['+x+'], y:['+y+']');
			}

			return true;
		}
	}, {
		key: "fftTest",
		value: function fftTest(i_dianshu_mi, x, y, i_dianshu) {
			this._o_fft(1, i_dianshu_mi, x, y, i_dianshu);
		}

		/**
   * 计算指定 x 点序列的FFT
   * i_dianshu：波形的长度；
   * i_dianshu_mi：i_dianshu是2的多少次幂？如果i_dianshu=1024，则i_dianshu_mi=10；
   *
   * x[]：时域波形存放区，x[0]=0；x[1]到x[i_dianshu]中存放时域波形；
   * y[]：从y[0]到y[i_dianshu]初始化为0；
   *
   * fft完成之后：x[1]到x[i_dianshu/2]中存放存放频谱的X坐标值；y[1]到y[i_dianshu/2]中存放频谱的Y坐标值；
   *
   * 每一点的辐值：sqrt(x[i] * x[i] + y[i] * y[*]) * 4 / i_dianshu;
   * 每一点的相位：atan2(x[i],y[i]);
   *
   * @return 函数返回 y, y[1]到y[i_dianshu/2]中存放频谱的Y坐标值；
   **/

	}, {
		key: "_o_fft",
		value: function _o_fft(dir, i_dianshu_mi, x, y) {
			var i_dianshu = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

			var i, j, k, l, m, l1;
			var t1, t2, u1, u2, w1, w2, p2, z;

			// Calculate the number of points
			if (i_dianshu == 0) {
				i_dianshu = 1;
				for (i = 0; i < i_dianshu_mi; i++) {
					i_dianshu *= 2;
				}
			}

			y.length = i_dianshu + 1;
			for (i = 0; i <= i_dianshu; i++) {
				y[i] = 0;
			}j = 1;
			l = 1;
			for (; l <= i_dianshu - 1; l++) {
				if (l < j) {
					t1 = x[j];
					t2 = y[j];
					x[j] = x[l];
					y[j] = y[l];
					x[l] = t1;
					y[l] = t2;
				}
				k = i_dianshu >> 1;
				while (k < j) {
					j -= k;
					k = k >> 1;
				}
				j = j + k;
			}
			m = 1;
			i = 1;
			for (; i <= i_dianshu_mi; i++) {
				u1 = 1;
				u2 = 0;
				k = m;
				m = m << 1;
				p2 = 3.1415926 / k;
				w1 = Math.cos(p2);
				w2 = -Math.sin(p2);
				w2 = -w2;
				j = 1;
				for (; j <= k; j++) {
					l = j;
					for (; l <= i_dianshu; l += m) {
						l1 = l + k;
						t1 = x[l1] * u1 - y[l1] * u2;
						t2 = x[l1] * u2 + y[l1] * u1;
						x[l1] = x[l] - t1;
						y[l1] = y[l] - t2;
						x[l] += t1;
						y[l] += t2;
					}
					z = u1 * w1 - u2 * w2;
					u2 = u1 * w2 + u2 * w1;
					u1 = z;
				}
			}
		}

		/**
   *
   * @param real real[len] 输入实部的数组
   * @param image image[len] 输入虚部的数组
   * @param m len = 1<<m  幂
   * @return  xout[len] 输出实部的数组
   *
   */

	}, {
		key: "ifft",
		value: function ifft(real, image, m) {
			var k, le, windex, i, j;
			var tempWindex = 0,
			    n = 1;

			var xi_x, xi_y, xip_x, xip_y, temp_x, temp_y, u_x, u_y, tm_x, tm_y;
			var arg, w_real, w_imag, wrecur_real, wrecur_imag, wtemp_real;
			n = 1 << m;
			le = n * 0.5;

			var wptr0 = new Array(le - 1),
			    wptr1 = new Array(le - 1),
			    xout = new Array(n),
			    x1 = new Array(n);

			for (var _i6 = 0; _i6 < n; _i6++) {
				x1[_i6] = 0;
			}

			for (var _i7 = 0; _i7 < n; _i7++) {
				xout[_i7] = real[_i7];
				x1[_i7] = image[_i7];
			}

			arg = 4.0 * Math.atan(1.0) / le;
			wrecur_real = w_real = Math.cos(arg);
			wrecur_imag = w_imag = Math.sin(arg);

			for (var _j2 = 0; _j2 < le - 1; _j2++) {
				wptr0[_j2] = wrecur_real;
				wptr1[_j2] = wrecur_imag;
				wtemp_real = wrecur_real * w_real - wrecur_imag * w_imag;
				wrecur_imag = wrecur_real * w_imag + wrecur_imag * w_real;
				wrecur_real = wtemp_real;
			}

			le = n;
			windex = 1;
			for (var kk = 0; kk < m; kk++) {
				le = le * 0.5;
				for (var _i8 = 0; _i8 < n; _i8 = _i8 + 2 * le) {
					xi_x = xout[_i8];
					xi_y = x1[_i8];
					xip_x = xout[_i8 + le];
					xip_y = x1[_i8 + le];

					temp_x = xi_x + xip_x;
					temp_y = xi_y + xip_y;
					xip_x = xi_x - xip_x;
					xip_y = xi_y - xip_y;

					xout[_i8 + le] = xip_x;
					x1[_i8 + le] = xip_y;
					xout[_i8] = temp_x;
					x1[_i8] = temp_y;
				}

				tempWindex = windex - 1;
				for (var _j3 = 1; _j3 < le; _j3++) {

					u_x = wptr0[tempWindex];
					u_y = wptr1[tempWindex];

					for (var _i9 = _j3; _i9 < n; _i9 = _i9 + 2 * le) {
						xi_x = xout[_i9];
						xi_y = x1[_i9];
						xip_x = xout[_i9 + le];
						xip_y = x1[_i9 + le];

						temp_x = xi_x + xip_x;
						temp_y = xi_y + xip_y;
						tm_x = xi_x - xip_x;
						tm_y = xi_y - xip_y;
						xip_x = tm_x * u_x - tm_y * u_y;
						xip_y = tm_x * u_y + tm_y * u_x;

						xout[_i9 + le] = xip_x;
						x1[_i9 + le] = xip_y;
						xout[_i9] = temp_x;
						x1[_i9] = temp_y;
					}
					tempWindex = tempWindex + windex;
				}

				windex = 2 * windex;
			}

			j = 0;
			for (var _i10 = 1; _i10 < n - 1; _i10++) {
				k = n / 2;
				while (k <= j) {
					j = j - k;
					k = k * 0.5;
				}
				j = j + k;
				if (_i10 < j) {
					xi_x = xout[_i10];
					xi_y = x1[_i10];
					temp_x = xout[j];
					temp_y = x1[j];

					xout[j] = xi_x;
					x1[j] = xi_y;
					xout[_i10] = temp_x;
					x1[_i10] = temp_y;
				}
			}

			return xout;
		}

		/**
   * ifft
   * @param xin
   * @param m
   * @return
   *
   */

	}, {
		key: "ifft2",
		value: function ifft2(xin, m) {
			var scale;

			var n = 1;
			var k, l, le, windex;
			var tempWindex = 0;
			var i, j;

			var wptr;
			var xi, xip, temp, u, tm;
			xi = new Array2(1, 2);
			xip = new Array2(1, 2);
			temp = new Array2(1, 2);
			u = new Array2(1, 2);
			tm = new Array2(1, 2);

			var arg, w_real, w_imag, wrecur_real, wrecur_imag, wtemp_real;

			n = 1 << m;
			le = n / 2;

			var x = new Array2(n, 2);
			for (var _i11 = 0; _i11 < n; _i11++) {
				x.set(_i11, 0, xin.get(_i11, 0));
				x.set(_i11, 1, xin.get(_i11, 1));
			}

			wptr = new Array2(le - 1, 2);
			arg = 4.0 * Math.atan(1.0) / le;
			wrecur_real = w_real = Math.cos(arg);
			wrecur_imag = w_imag = Math.sin(arg);

			for (var _j4 = 0; _j4 < le - 1; _j4++) {
				wptr.set(_j4, 0, wrecur_real);
				wptr.set(_j4, 1, wrecur_imag);
				wtemp_real = wrecur_real * w_real - wrecur_imag * w_imag;
				wrecur_imag = wrecur_real * w_imag + wrecur_imag * w_real;
				wrecur_real = wtemp_real;
			}

			le = n;
			windex = 1;
			for (var kk = 0; kk < m; kk++) {
				le = le * 0.5;
				for (var _i12 = 0; _i12 < n; _i12 = _i12 + 2 * le) {
					xi.set(0, 0, x.get(_i12, 0));
					xi.set(0, 1, x.get(_i12, 1));
					xip.set(0, 0, x.get(_i12 + le, 0));
					xip.set(0, 1, x.get(_i12 + le, 1));

					temp.set(0, 0, xi.get(0, 0) + xip.get(0, 0));
					temp.set(0, 1, xi.get(0, 1) + xip.get(0, 1));
					xip.set(0, 0, xi.get(0, 0) - xip.get(0, 0));
					xip.set(0, 1, xi.get(0, 1) - xip.get(0, 1));

					x.set(_i12 + le, 0, xip.get(0, 0));
					x.set(_i12 + le, 1, xip.get(0, 1));
					x.set(_i12, 0, temp.get(0, 0));
					x.set(_i12, 1, temp.get(0, 1));
				}

				tempWindex = windex - 1;
				for (var _j5 = 1; _j5 < le; _j5++) {
					u.set(0, 0, wptr.get(tempWindex, 0));
					u.set(0, 1, wptr.get(tempWindex, 1));

					for (var _i13 = _j5; _i13 < n; _i13 = _i13 + 2 * le) {
						xi.set(0, 0, x.get(_i13, 0));
						xi.set(0, 1, x.get(_i13, 1));
						xip.set(0, 0, x.get(_i13 + le, 0));
						xip.set(0, 1, x.get(_i13 + le, 1));

						temp.set(0, 0, xi.get(0, 0) + xip.get(0, 0));
						temp.set(0, 1, xi.get(0, 1) + xip.get(0, 1));
						tm.set(0, 0, xi.get(0, 0) - xip.get(0, 0));
						tm.set(0, 1, xi.get(0, 1) - xip.get(0, 1));
						xip.set(0, 0, tm.get(0, 0) * u.get(0, 0) - tm.get(0, 1) * u.get(0, 1));
						xip.set(0, 1, tm.get(0, 0) * u.get(0, 1) + tm.get(0, 1) * u.get(0, 0));

						xi.set(_i13 + le, 0, xip.get(0, 0));
						xi.set(_i13 + le, 1, xip.get(0, 1));

						xi.set(_i13, 0, temp.get(0, 0));
						xi.set(_i13, 1, temp.get(0, 1));
					}

					tempWindex = tempWindex + windex;
				}

				windex = 2 * windex;
			}

			j = 0;
			for (var _i14 = 1; _i14 < n - 1; _i14++) {
				k = n * 0.5;
				while (k <= j) {
					j = j - k;
					k = k * 0.5;
				}
				j = j + k;
				if (_i14 < j) {
					xi.set(0, 0, x.get(_i14, 0));
					xi.set(0, 1, x.get(_i14, 1));
					temp.set(0, 0, x.get(j, 0));
					temp.set(0, 1, x.get(j, 1));

					x.set(j, 0, xi.get(0, 0));
					x.set(j, 1, xi.get(0, 1));
					x.set(_i14, 0, temp.get(0, 0));
					x.set(_i14, 1, temp.get(0, 1));
				}
			}
			return x;
		}
	}]);

	return FFT;
}();

exports.default = FFT;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function baseWaveTool() {}

baseWaveTool.prototype.readUnsignedShort = function (b1, b2) {
  var num = (b1 & 0xff) << 8 | b2 & 0xff;
  if (num > 32767) {
    return num - 65536;
  }
  return num;
};

//规定数组前两位是系数
baseWaveTool.prototype.readByteArray = function (oldArray) {

  var newArray = new Array(),
      size = oldArray.length;
  //解析系数
  var coefficient = this.readUnsignedShort(oldArray[0], oldArray[1]);
  //采样频率
  var sampleFrequency = this.readUnsignedShort(oldArray[2], oldArray[3]);

  for (var i = 4; i < size; i = i + 2) {

    newArray.push(this.readUnsignedShort(oldArray[i], oldArray[i + 1]) / coefficient);
  }

  return { waveData: newArray, sampleFrequency: sampleFrequency };
};

function baseWaveRequest(reqInterface) {
  this.url = reqInterface;
  //this.url = $service_config.url + reqInterface;
  //this.success = success;
  //this.error = error;
}

baseWaveRequest.prototype.readCode = function (w) {
  return (w[0] & 0xff) << 24 | (w[1] & 0xff) << 16 | (w[2] & 0xff) << 8 | w[3] & 0xff;
};

baseWaveRequest.prototype.readLong = function (w) {
  var c1 = w[0] & 255,
      c2 = w[1] & 255;
  if (c1 === 255) {
    if (c2 === 248) return Number.NaN;
    if (c2 === 240) return Number.NEGATIVE_INFINITY;
  } else if (c1 === 127 && c2 === 240) return Number.POSITIVE_INFINITY;
  var c3 = w[2] & 255,
      c4 = w[3] & 255,
      c5 = w[4] & 255,
      c6 = w[5] & 255,
      c7 = w[6] & 255,
      c8 = w[7] & 255;
  if (!c1 && !c2 && !c3 && !c4) return 0;
  for (var d = (c1 << 4 & 2047 | c2 >> 4) - 1023, c2 = ((c2 & 15) << 16 | c3 << 8 | c4).toString(2), c3 = c2.length; c3 < 20; c3++) {
    c2 = "0" + c2;
  }c6 = ((c5 & 127) << 24 | c6 << 16 | c7 << 8 | c8).toString(2);
  for (c3 = c6.length; c3 < 31; c3++) {
    c6 = "0" + c6;
  }c5 = parseInt(c2 + (c5 >> 7 ? "1" : "0") + c6, 2);
  if (c5 == 0 && d == -1023) return 0;
  return c5;
};

baseWaveRequest.prototype.send = function (data, success, error) {
  var xmlhttp;
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  } else {
    // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.open("POST", this.url, true);
  xmlhttp.responseType = 'arraybuffer';
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //这行代码很关键，用来把字符串类型的参数序列化成Form Data
  xmlhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
  var params = 'isWaveRequest=true';
  if (data) {
    for (var key in data) {
      params = params + '&' + key + '=' + data[key];
    }
  }

  xmlhttp.send(params);
  var me = this;

  xmlhttp.onload = function (e) {

    if (this.status == 200) {
      var int8Array = new Int8Array(this.response);
      if (success) {
        //解析code
        var code = me.readCode(int8Array);
        if (code != 200) {
          success({ code: code });
          return false;
        }

        var time = new Date(me.readLong(int8Array.subarray(4, 12)));
        var result = { code: code, time: time, data: int8Array.subarray(12, int8Array.byteLength) };
        success(result);
      }
    } else {
      if (error) {
        error(this.response);
      } else {
        // alert('获取数据失败!');
      }
    }
  };
};

exports.baseWaveTool = baseWaveTool;
exports.baseWaveRequest = baseWaveRequest;

/***/ })
/******/ ]);
});