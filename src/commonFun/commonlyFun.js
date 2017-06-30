
/*
 * js常用的方法
 * by gouxiaojun
 */

import judgType from './typeJudgment';
import isEmptyObj from './objectUtil';

/*
 * 对象转数组
 * */
function objectTurnArray(obj) {
    //先判断是否是对象并且不是空对象
    if (!judgType.isObject(obj) && isEmptyObj.isEmptyObj(obj))return;
    var arr = [];
    for (var key in obj) {
        arr.push(obj[key]);
    }
    return arr;
}

export default {
    objectTurnArray
}