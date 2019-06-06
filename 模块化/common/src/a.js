module.exports = {
  // 也可以exports.print = ...
  // 这里exports变量指向module.exports，即exports = module.exports,它被初始化为空对象{}了
  // 所以类似exports = 123，exports = function(){}这种改变类型的赋值是无效的
  // 因此推荐module.exports = xxx这种写法
  print() {
    console.log('print 88');
  }
};

// 一个js文件就是一个模块 nodejs加载a.js后，它可以把代码包装一下
/* (function(){
  ...
})() */

//module.exports的实现
// -准备module对象
/* var module = {
  id: 'a',
  exports: {} 
};
// -读取a.js的代码
var load = function(mod) {
  function demo() {}
  mod.exports = demo;
  return mod.exports;
};
var exported = load(module); //所以a.js可以直接用module这个变量
// -保存module
save(module, exported); */
