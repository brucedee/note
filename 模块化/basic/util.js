// 原始写法
// -只要把不同的函数（以及记录状态的变量）简单放在一起，就算是一个模块
// -污染全局变量 变量名可能冲突 看不出成员间关系
function getFormatDate(date, type) {
  var y = date.getFullYear(),
    M = date.getMonth() + 1,
    d = date.getDate();

  if (type == 1) {
    return `${y}年${M}月${d}日`;
  }
  if (type == 2) {
    return `${y}-${M}-${d}`;
  }
}

function getAge() {
  console.log('age 18');
}

var NUM = 99;
