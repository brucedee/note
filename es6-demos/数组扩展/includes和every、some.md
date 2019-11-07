# includes和every、some

1. includes --是否包含某个值

   ```javascript
   let arr1 = [-0, 88, 99, 100, NaN];
   arr1.includes(99) //true
   arr1.includes('99') //false
   arr1.includes(NaN) //true //与indexOf判断，有差
   arr1.includes(99, 3) //false
   arr1.includes(99, -3) //true
   arr1.includes(+0) //true
   
   [NaN].indexOf(NaN) //-1 //indexOf用===，用来判断是否有某个值时，不够语义化
   ```

2. every --是否每个元素都符合条件

   ```javascript
   let arr21 = [3, 4, 6, 9];
   let arr22 = [3, 4, '6', 9];
   
   arr21.every(item => typeof item === 'number') //true
   arr22.every(item => typeof item === 'number') //false
   ```

3. some --是否至少一个元素符合条件

   ```javascript
   let arr21 = [3, 4, 6, 9];
   let arr22 = [3, 4, '6', 9];
   arr21.some(item => typeof item === 'string') //false
   arr22.some(item => typeof item === 'string') //true
   ```

   