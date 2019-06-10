//模块加载行为自定义 如
require.config({
  paths: {
    jquery: 'https://cdn.bootcss.com/jquery/3.4.1/jquery.min'
  }
});

require(['./a'], function(a) {
  var dt = new Date();
  a.printDate(dt);
});
