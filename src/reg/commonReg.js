/*
* sg-utils-reg 2017-06
* common regular utils
* */

/* 要 export 的顶层对象 */
var reg = {
  regTestPhoneNo:regTestPhoneNo,
  regTestEMail:regTestEMail,
  regTestUsername:regTestUsername,
  regTestPassword:regTestPassword,
  regTestDateFormat:regTestDateFormat,
  regTestMd5:regTestMd5
};

/* 正则表达式: regular expression */
// 1.手机号: 1开头的十一位数字
const regPhoneNoExp = /^1\d{10}$/;
// 2.邮箱地址:
const regEMailExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
// 3.用户名: 字母、数字、下划线开头，1-16位
const regUsernameExp = /^\w{1,16}$/;
// 4.用户密码: 密码由数字、字母、特殊字符开头、组成且密码长度为1~16个字符
const regPasswordExp = /^[\w#@$%^&*()~]{1,16}$/; // /^[A-Za-z0-9_#@$%^&*()~]{1,16}$/
// 5.标准日期时间格式：yy/mm/dd hh:mm:ss 或者 yy-mm-dd hh:mm:ss
const regDateFormatExp = /^\d{4,}(\/|-)(?:0?\d|1[12])(\/|-)(?:[012]?\d|3[01]) (?:[01]?\d|2[0-4]):(?:[0-5]?\d|60):(?:[0-5]?\d|60)$/;
// 验证md5的正则表达式
const regMd5Exp = /^([a-fA-F0-9]{32})$/;
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

function regTestMd5(str){
	return regMd5Exp.test(str);
}

/* 暴露顶层对象 */
export default reg
