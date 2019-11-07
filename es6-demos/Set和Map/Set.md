# Set

1. 基本--Set构造函数生成一种新的数据结构。类似数组，但成员值不重复。传入具有 iterable 接口的数据，如数组，字符串，Set，Map，arguments，dom元素集合

   ```javascript
   let str1 = "hello";
   let arr1 = ['6',6,+0,0,-0,undefined,null,NaN,1/'dry',NaN,{},{}]
   
   let s11 = new Set(str1);
   let s12 = new Set(arr1);
   
   s11 //Set(4) {"h", "e", "l", "o"}
   [...s11].join('') //'helo'
   s12 //Set(8) {"6", 6, 0, undefined, null, NaN, {}, {}}
   Array.from(s12) //["6", 6, 0, undefined, null, NaN, {}, {}]
   
   //基本相当于全等。除了NaN等于NaN,所以这里最后只剩一个NaN
   ```

2. 属性方法--size add delete clear has

   ```javascript
   let s2 = new Set();
   
   s2.add('go');
   s2.add(1)
       .add(2)
       .add(3);
   s2 //Set(4) {"go", 1, 2, 3}
   s2.size //4
   s2.has(2) //true
   
   s2.delete(2)
   s2 //Set(3) {"go", 1, 3}
   s2.has(2) //false
   
   s2.clear()
   s2 //Set(0) {}
   ```

3. 遍历 -- keys，values，entries，没有键名，只有键值，或者说键名等于键值。forEach

   ```javascript
   let s3 = new Set(['hello', true, 87]);
   for (const k of s3.keys()) {
       console.log(k); //hello true 87
   }
   for (const v of s3.values()) {
       console.log(v); //hello true 87
   }
   for (const item of s3.entries()) {
       console.log(item); //['hello','hello'] [true,true] [87,87]
   }
   
   //Set结构实例默认可遍历，它的默认遍历器生成函数为其values方法
   Set.prototype[Symbol.iterator] === Set.prototype.values //true
   
   for (const v of s3) {
       console.log(v); //hello true 87
   }
   ```

   ```javascript
   s3.forEach((value, key, set) => {
       console.log(value, key);
   });
   //hello hello Set(3) {"hello", true, 87}
   //true true Set(3) {"hello", true, 87}
   //87 87 Set(3) {"hello", true, 87}
   ```

   ```javascript
   //遍历没法直接改变Set，变通方式
   let s31 = new Set([1,2])
   s31 = new Set([...s31].map(item => item*2))
   s31 //Set(2) {2, 4}
   
   let s32 = new Set([1,2])
   s32 = new Set(Array.from(s32,item => item*3))
   s32 //Set(2) {3, 6}
   ```

4. 实例

   ```javascript
   //实现Set的并集、交集、差集
   let m = new Set([3, 4, 5]);
   let n = new Set([4, 5, 6]);
   
   let add = new Set([...m, ...n]);
   let same = new Set([...m].filter(item => n.has(item))); //数组的话用includes
   let diff = new Set([...add].filter(item => !same.has(item)));
   
   add //Set(4) {3, 4, 5, 6}
   same //Set(2) {4, 5}
   diff //Set(2) {3, 6}
   ```

   

   

   