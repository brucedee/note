//对象写法
// -暴露了模块私有成员 如objs._count = 456

var objs = {
  _count: NUM * 2, //funcs.js需要先引入
  getCount: function() {
    return this._count;
  },
  theType: {
    t1: 1,
    t2: 2
  }
};
