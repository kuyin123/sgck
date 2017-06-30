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
	var type = typeof value;
	return type === 'function' || (!!value && type == 'object');
};

function isNumber(num) {
	var type = typeof num;
	return num === 'number' || num instanceof Number
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

export default {
	isArray,
	isFunction,
	isString,
	isObject,
	isNumber,
	isBoolean,
	isNull,
	isNullOrUndefined,
	isUndefined,
	isDate
}