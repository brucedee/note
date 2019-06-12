define(['./a-util'], function(aUtil) {
  return {
    printDate(d) {
      console.log(aUtil.aGetFormatDate(d));
    }
  };
});
let sum = 0;
for (let i = 0; i < 1000000000; i += 1) {
  sum++;
}
console.log(sum);
