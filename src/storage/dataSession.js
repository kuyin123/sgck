/*
 * sessionStorage对象缓存数据操作
 * */
function _isJSON(obj) {
  return typeof(obj) === "object" && Object.prototype.toString.call(obj).toLowerCase() === "[object object]" && !obj.length;
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

var dataSession = (function() {

  if (window.sessionStorage) {

    var storage = window.sessionStorage;

    var set = function (key, val) {
      if (key && !_isJSON(key)) {
        storage.setItem(key, _stringify(val));
      } else if (key && _isJSON(key) && !val) {
        for (var a in key) this.set(a, key[a]);
      }
      return this
    }

    var get = function get(key) {
      if (!key) {
        var ret = {};
        _forEach(function(key, val) {
          ret[key] = val;
        });
        return ret;
      }
      if (key.charAt(0) === '?') {
        return this.has(key.substr(1));
      }
      return _deserialize(storage.getItem(key));
    }

    var clear = function() {
      storage.clear();
      return this;
    }

    var remove = function(key) {
      var val = get(key);
      storage.removeItem(key);
      return val;
    }

    var has = function (key) {
      return ({}).hasOwnProperty.call(get(), key);
    }

    var keys = function (){
      var d = [];
      _forEach(function(k, list) {
        d.push(k);
      });
      return d;
    }

    var size = function() {
      return keys().length;
    }

    var _forEach = function (callback) {
      for (var i = 0; i < storage.length; i++) {
        var key = storage.key(i);
        if (callback(key, get(key)) === false) break;
      }
      return this;
    }
    return {
      set:set,
      get:get,
      clear:clear,
      remove:remove,
      has:has,
      keys:keys,
      size:size
    }

  } else {
    throw new Error('浏览器不支持sessionStorage对象。。。。。。。');
  }

})();

export default dataSession;
