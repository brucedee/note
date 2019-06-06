function getFormatDate(date, type) {
  var y = date.getFullYear(),
    M = date.getMonth() + 1,
    d = date.getDate();

  if (type == $.theType.a) {
    return `${y}年${M}月${d}日`;
  }
  if (type == $.theType.b) {
    return `${y}-${M}-${d}`;
  }
}
