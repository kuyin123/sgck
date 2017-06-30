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
Inheritance.inherits = function(clazz, baseClazz) {
	var clazzPrototype = clazz.prototype;

	function F() {}
	F.prototype = baseClazz.prototype;
	clazz.prototype = new F();

	for(var prop in clazzPrototype) {
		clazz.prototype[prop] = clazzPrototype[prop];
	}
	clazz.prototype.constructor = clazz;
	clazz.superClass = baseClazz;
}

/**
 * @param {*} target
 * @param {*} source  
 * source为object对象
 */
Inheritance.extend = function(target, source) {
	for(var key in source) {
		if(source.hasOwnProperty(key)) {
			target[key] = source[key];
		}
	}
	return target;
}

/**
 * @memberOf module:zrender/core/util
 * @param {Object|Function} target
 * @param {Object|Function} sorce
 * @param {boolean} overlay
 */
Inheritance.mixin = function(target, source, overlay) {
	target = 'prototype' in target ? target.prototype : target;
	source = 'prototype' in source ? source.prototype : source;

	defaults(target, source, overlay);
}

/**
 * @param {*} target
 * @param {*} source
 * @param {boolen} [overlay=false]
 */
Inheritance.defaults = function(target, source, overlay) {
	for(var key in source) {
		if(source.hasOwnProperty(key) &&
			(overlay ? source[key] != null : target[key] == null)
		) {
			target[key] = source[key];
		}
	}
	return target;
}

/*
 * 寄生组合式继承
 * subType:子类
 * superType：父类
 * */
Inheritance.inheritPrototype = function(subType, superType) {
	var prototype = object(superType.prototype);
	prototype.constructor = subType;
	subType.prototype = prototype;
}

export default Inheritance;