
/*
 * localStorage对象缓存数据操作
 * by gouxiaojun
 * */

let storage = (function () {

    if (window.localStorage) {

        let ls = window.localStorage;

        //更新缓存数据
        function write(name, val) {
            let str = typeof name === 'string' || typeof name === "number";
            let obj = typeof val === 'object';
            if (!str)return;
            str && !obj && ls.setItem(name, val);
            str && obj && ls.setItem(name, JSON.stringify(val));
        };

        //获取缓存数据
        function read(name) {
            let item = ls.getItem(name);
            if (name && item) {
                return (item.indexOf('{') != -1 || item.indexOf('[') != -1) ? JSON.parse(item) : item;
            } else {
                return item;
            }
        };

        //删除缓存数据
        function remove(name) {
            return ls.removeItem(name);
        };

        //清除所有缓存数据
        function clearAll() {
            ls.clear();
        };

        return {
            write,
            read,
            remove,
            clearAll
        }

    } else {
        throw new Error('浏览器不支持LocalStorage对象。。。。。。。');
    }

})();

export default storage;
