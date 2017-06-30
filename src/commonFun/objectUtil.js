/*
 * js对象工具方法
 * by gouxiaojun
 */

import judgType from './typeJudgment';

/*
 * 判断对象是否为空
 * 不排除对象原型上的属性
 * */
function isEmptyObj(obj) {
    //判断是否是对象
    if (judgType.isObject(obj))return;
    for (var key in obj) {
        return false;
    }
    return true;
}

export default {
    isEmptyObj
}
