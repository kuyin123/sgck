
/*
 * localStorage对象缓存数据操作
 * by gouxiaojun
 * */

var storage = (function () {

    if (window.localStorage) {

        var ls = window.localStorage;

        //更新缓存数据
        var set = function (name, val) {
            var str = typeof name === 'string' || typeof name === "number";
            var obj = typeof val === 'object';
            if (!str)return;
            str && !obj && ls.setItem(name, val);
            str && obj && ls.setItem(name, JSON.stringify(val));
        };

        //获取缓存数据
        var get = function(name) {
            var item = ls.getItem(name);
            if (name && item) {
                return (item.indexOf('{') != -1 || item.indexOf('[') != -1) ? JSON.parse(item) : item;
            } else {
                return item;
            }
        };

        //删除缓存数据
        var remove = function(name) {
            return ls.removeItem(name);
        };

        //清除所有缓存数据
        var clear = function() {
            ls.clear();
        };

        return {
            set:set,
            get:get,
            remove:remove,
            clear:clear
        }

    } else {
        throw new Error('浏览器不支持LocalStorage对象。。。。。。。');
    }

})();

export default storage;
