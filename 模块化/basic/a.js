var modeA = (function($) {
  const type = $.theType.a; //得保证util.js在a.js前引入，否则Uncaught ReferenceError: theType is not defined
  function aGetFormatDate(date) {
    return getFormatDate(date, type);
  }

  function aDemo() {
    return $.age;
  }

  return {
    aGetFormatDate,
    aDemo
  };
})($);
