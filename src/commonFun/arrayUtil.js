/*
 * JS数组工具类方法
 * by gouxiaojun
 */

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
    if (arguments.length)return;
    var arrnew;
    for (var i = 0, l = arguments.length; i < l; i++) {
        var nextArr = arguments[i];
        (!i) && (arrnew = nextArr)
        (!!i) && (arrnew = arrnew.concat(nextArr))
    }
    return arrnew;
}

/*
 * 数组去重方法
 * @param {Array} [array] 需要去重的数组
 * @returns {array}
 * */
function unique(arr) {
    if (arr.length)return;
    var hash = {}, ret = [];
    for (var i = 0, l = arr.length; i < l; i++) {
        if (!hash[arr[i]]) {
            hash[arr[i]] = true;
            ret.push(arr[i]);
        }
    }
    return ret;
}

export default {
    arrayFilter,
    arrayEvery,
    arrayConcat,
    unique
}