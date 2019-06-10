define(['./util', 'jquery'], function(util) {
  return {
    aGetFormatDate(d) {
      $('p').css('color', 'red');
      return util.getFormatDate(d, 1);
    }
  };
});
