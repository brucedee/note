console.log('%%%%%%%%%%%%%%%%%%%%%  dayjs  %%%%%%%%%%%%%%%%%%%%%');
console.log(dayjs());
console.log('今天');
var today = dayjs().format('YYYY-MM-DD HH:mm:ss');
console.log(today);

console.log('昨天');
var yesterday = dayjs()
  .subtract(1, 'day')
  .format('YYYY-MM-DD');
console.log(yesterday);

console.log('近1周');
var nearlyWeek =
  dayjs()
    .subtract(6, 'day')
    .format('YYYY-MM-DD') +
  '至' +
  today;
console.log(nearlyWeek);

console.log('近1个月');
var nearlyMonth =
  dayjs()
    .subtract(1, 'month')
    .format('YYYY-MM-DD') +
  '至' +
  today;
console.log(nearlyMonth);

console.log('近3个月');
var nearlyQuarter =
  dayjs()
    .subtract(3, 'month')
    .format('YYYY-MM-DD') +
  '至' +
  today;
console.log(nearlyQuarter);

console.log('近6个月');
var nearlyHalf =
  dayjs()
    .subtract(6, 'month')
    .format('YYYY-MM-DD') +
  '至' +
  today;
console.log(nearlyHalf);

console.log('近1年');
var nearlyYear =
  dayjs()
    .subtract(1, 'year')
    .format('YYYY-MM-DD') +
  '至' +
  today;
console.log(nearlyYear);

console.log('本月');
var thisMonth =
  dayjs()
    .startOf('month')
    .format('YYYY-MM-DD') +
  '至' +
  dayjs()
    .endOf('month')
    .format('YYYY-MM-DD');
console.log(thisMonth);

console.log('上月');
var lastMonth =
  dayjs()
    .subtract(1, 'month')
    .startOf('month')
    .format('YYYY-MM-DD') +
  '至' +
  dayjs()
    .subtract(1, 'month')
    .endOf('month')
    .format('YYYY-MM-DD');
console.log(lastMonth);

console.log('今年');
var thisYear =
  dayjs()
    .startOf('year')
    .format('YYYY-MM-DD') +
  '至' +
  dayjs()
    .endOf('year')
    .format('YYYY-MM-DD');
console.log(thisYear);

console.log('去年');
var lastYear =
  dayjs()
    .subtract(1, 'year')
    .startOf('year')
    .format('YYYY-MM-DD') +
  '至' +
  dayjs()
    .subtract(1, 'year')
    .endOf('year')
    .format('YYYY-MM-DD');
console.log(lastYear);

console.log('相差毫秒 相差天数');
console.log(dayjs('2019-6-5').diff(dayjs('2019-5-29')));
console.log(dayjs('2019-6-5').diff(dayjs('2019-5-29'), 'day'));

console.log('月份天数');
console.log(dayjs().daysInMonth());
console.log(dayjs('2019-05').daysInMonth());
