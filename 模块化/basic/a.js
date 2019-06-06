//立即执行函数写法 IIFE
// -不会暴露模块私有成员 moduleA._countA //undefined
var moduleA = (function($) {
  var _countA = 456;
  const type = $.theType.a; //得保证util.js在a.js前引入，否则Uncaught ReferenceError: theType is not defined

  function aGetFormatDate(date) {
    return getFormatDate(date, type);
  }

  function aGetDemo() {
    console.log($.getDemo);
  }

  return {
    aGetFormatDate,
    aGetDemo
  };
})($);

// -模块需要分成几部分或者一个模块需要继承另一个模块时
var moduleB = (function(mod) {
  mod.add = function() {};
  return mod;
})(moduleB || {}); // 宽放大模式
