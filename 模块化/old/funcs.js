//原始写法
// -状态变量,工具函数。简单放一起，就算一个模块
// -污染全局变量 变量名可能冲突 看不出成员间关系
var NUM = 10;

function getAge() {
  console.log('age 18');
}

function getFormatDate(date, type) {
  var y = date.getFullYear(),
    M = date.getMonth() + 1,
    D = date.getDate();

  if (type == 1) {
    return `${y}年${M}月${D}日`;
  }
  if (type == 2) {
    return `${y}-${M}-${D}`;
  }
}
