# Array.of和Array.from

1. Array.of --将一组值转为数组

   ```javascript
   Array() //[]
   Array(null) //[null]
   Array[undefined] //[undefined]
   Array(0) //[]
   Array(3) //[empty × 3]
   Array(3,6) //[3, 6]
   
   Array.of() //[]
   Array(null) //[null]
   Array[undefined] //[undefined]
   Array(0) //[0] --
   Array.of(3) //[3] --也就是只有一个数字时，区别于Array(num)
   Array.of(3,6) //[3,6]
   
   //模拟实现Array.of
   function mockArrayOf1(){
       return [].slice.call(arguments)
   }
   function mockArrayOf2(){
       return [...arguments]
   }
   ```

2. Array.from --将类数组(array-like,具有length属性)对象或者可迭代对象(iterable，具有iterator)对象转为数组

   ```javascript
   Array.from(['hello',87]) //['hello',87]
   
   let arrayLike = { //不具有iterable
       0: 'a',
       1: 'b',
       4: 'c',
       xx: 'set',
       length: 4
   };
   [].slice.call(arrayLike) //["a", "b", empty × 2]
   Array.from(arrayLike) //['a','b',undefined,undefined] 会去掉不是数字的键值
   //[...arrayLike] //Uncaught TypeError: arrayLike is not iterable
   ```

   ```javascript
   Array.from('hello') //['h','e','l','l','o'] 
   //Array.from(str).length 可以避免JavaScript将大于\uFFFF的Unicode字符，算作两个字符的bug
   
   function f(){
       return Array.from(arguments) //arguments对象
   }
   f('hello',87) //["hello", 87]
   
   Array.from(document.querySelectorAll('div')) //[div,div...] nodeList对象->数组
   Array.from(document.getElementByTagName('div')) //[div,div...] HTMLCollection对象->数组
   
   let sets = new Set(['a','b']);
   Array.from(sets) //["a", "b"]
   
   let maps = new Map([
     ['name', 'kk'],
     [NaN, 18]
   ])
   Array.from(maps) //[['name', 'kk'],[NaN, 18]]
   ```

   ```javascript
   //Array.from有第二个参数，相当于数组化后，进行map()
   Array.from([2,'3a',4],x=>x*2) //[4, NaN, 8]
   Array.from([2,'3a',4]).map(x=>x*2) //[4, NaN, 8]
   
   Array.from(document.querySelectorAll('div'),x=>x.textContent) //取出一组DOM节点的文本内容
   [...document.querySelectorAll('div')].map(x=>x.textContent)
   ```