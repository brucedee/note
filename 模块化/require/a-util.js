require.config({
  paths: {
    util: './util',
    jquery: 'https://cdn.bootcss.com/jquery/3.4.1/jquery.min'
  }
});
define(['util', 'jquery'], function(util) {
  return {
    aGetFormatDate(d) {
      $('p').css('color', 'red');
      return util.getFormatDate(d, 1);
    }
  };
});
