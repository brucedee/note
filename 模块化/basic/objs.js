//对象写法
// -暴露了模块私有成员 如$._count = 456

var objs = {
  _count: NUM, //funcs.js需要先引入
  getCount: function() {
    return this._count * 10;
  },
  theType: {
    t1: 1,
    t2: 2
  }
};
