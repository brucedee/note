//对象写法
//-暴露了所有模块成员 内部状态可以被外部改写 如$._count = 456

var $ = {
  _count: 123,
  getDemo: 'demo haha',
  theType: {
    a: 1,
    b: 2
  }
};
