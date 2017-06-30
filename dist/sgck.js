/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _common = __webpack_require__(1);

var _common2 = _interopRequireDefault(_common);

var _dateHandler = __webpack_require__(4);

var _dateHandler2 = _interopRequireDefault(_dateHandler);

var _eventTarget = __webpack_require__(5);

var _eventTarget2 = _interopRequireDefault(_eventTarget);

var _Inheritance = __webpack_require__(6);

var _Inheritance2 = _interopRequireDefault(_Inheritance);

var _md = __webpack_require__(7);

var _md2 = _interopRequireDefault(_md);

var _commonReg = __webpack_require__(8);

var _commonReg2 = _interopRequireDefault(_commonReg);

var _localStorage = __webpack_require__(9);

var _localStorage2 = _interopRequireDefault(_localStorage);

var _sessionStorage = __webpack_require__(10);

var _sessionStorage2 = _interopRequireDefault(_sessionStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	common: _common2.default,
	dateHandler: _dateHandler2.default,
	eventTarget: _eventTarget2.default,
	Inheritance: _Inheritance2.default,
	MD5: _md2.default,
	commonReg: _commonReg2.default,
	localStorage: _localStorage2.default,
	sessionStorage: _sessionStorage2.default
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _stringUtil = __webpack_require__(2);

var _stringUtil2 = _interopRequireDefault(_stringUtil);

var _typeJudgment = __webpack_require__(3);

var _typeJudgment2 = _interopRequireDefault(_typeJudgment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	StringUtil: _stringUtil2.default,
	typeJudgment: _typeJudgment2.default
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
/* 4 */
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
  dateFormat: dateFormat
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

/* 暴露顶层对象 */
exports.default = dateHandler;

/***/ }),
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
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
  regTestDateFormat: regTestDateFormat
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

/* 暴露顶层对象 */
exports.default = reg;

/***/ }),
/* 9 */
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

        //更新缓存数据
        var write = function write(name, val) {
            var str = typeof name === 'string' || typeof name === "number";
            var obj = (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
            if (!str) return;
            str && !obj && ls.setItem(name, val);
            str && obj && ls.setItem(name, JSON.stringify(val));
        };

        //获取缓存数据
        var read = function read(name) {
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
        var clearAll = function clearAll() {
            ls.clear();
        };

        var ls = window.localStorage;;;;;

        return {
            write: write,
            read: read,
            remove: remove,
            clearAll: clearAll
        };
    } else {
        throw new Error('浏览器不支持LocalStorage对象。。。。。。。');
    }
}();

exports.default = storage;

/***/ }),
/* 10 */
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

var store = function () {

  if (window.sessionStorage) {
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

    var storage = window.sessionStorage;

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

exports.default = store;

/***/ })
/******/ ]);