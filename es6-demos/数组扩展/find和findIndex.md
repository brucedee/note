# find和findIndex

1. find(item,index,arr)个符合条件的数组成员值

   ```javascript
   let arrfd = ['ss', 77, 90, 101, '梦'];
   let fd1 = arrfd.find(item => true);
   fd1 //ss
   let fd11 = arrfd.find(item => typeof item === 'number');
   fd11 //77
   let fd12 = arrfd.find(item => item > 200);
   fd12 //undefined
   
   let obj1 = {
       age: 88
   }
   let fd13 = arrfd.find(function(item) {
       return item > this.age;
   }, obj1); //find和findIndex都可以接收第2个参数，用来绑定回调函数中this的值
   fd13 //90
   ```

2. findIndex(item,index,arr)--查找出第一个符合条件的数组成员序号

   ```javascript
   let fd2 = arrfd.findIndex(item => item > 90);
   fd2 //3
   let fd22 = arrfd.findIndex(item => item > 200);
   fd22 //-1
   let fd23 = arrfd.findIndex(item => Object.is(NaN, item));
   fd23 //4; //find和findIndex都能识别NaN，借助Object.is
   
   [NaN].indexOf(NaN) //-1
   ```

   