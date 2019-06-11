//立即执行函数写法 IIFE
// -不会暴露模块私有成员 moduleA._t->undefined

var moduleA = (function() {
  var _t = 1;

  function aGetFormatDate(date) {
    return getFormatDate(date, _t);
  }

  return {
    aGetFormatDate
  };
})();

var moduleB = (function(objs) {
  var t = objs.theType.t2;

  function bGetCount() {
    return objs.getCount() * 10;
  }

  function bGetFormatDate(date) {
    return getFormatDate(date, t);
  }

  return {
    bGetCount,
    bGetFormatDate
  };
})(objs); //objs需要先引入

// -模块需要分成几部分或者一个模块需要继承另一个模块时
var moduleC = (function(mod) {
  mod.add = function() {};
  return mod;
})(moduleC || {}); //宽放大模式
