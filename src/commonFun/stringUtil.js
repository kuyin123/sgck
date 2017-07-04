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

export default {
    isEmpty:isEmpty,
    isEquals:isEquals,
    isEqualsIgnorecase:isEqualsIgnorecase,
    isNum:isNum,
    isChine:isChine
}