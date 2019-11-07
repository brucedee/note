# fill和copyWithin

1. fill(value,start,end)--给数组填充值

   ``` javascript
   Array(3).fill('go') //['go','go','go']
   ['hello',18,'blue'].fill('orange',1) //["hello", "orange", "orange"]
   ['hello',18,'blue'].fill('orange',1,2) //["hello", "orange", "blue"]
   ['hello',18,'blue'].fill('yellow',-1) //["hello", "18", "yellow"]
   ```

   ```javascript
   //如果填充的value是对象，则填充的是同一个内存地址的对象
   let arr1 = Array(3).fill([])
   arr1 //[[],[],[]]
   arr1[1].push('g');
   arr1 [['g'],['g'],['g']]
   
   let arr2 = Array(3).fill({
       age:18
   })
   arr2[0].age = 20;
   arr2 //[{age: 20},{age: 20},{age: 20}]
   ```

   ```javascript
   Array(7).fill(1) //得到一个7个1的数组
   ```

2. copyWithin(replaceStart,getStart,getEnd)--数组内部，将指定位置的成员复制到其它位置

   ```javascript
   let arrc = [12, 34, 56, 78, 90];
   arrc.copyWithin(3, 2, 4) //[12,34,56,56,78]
   arrc.copyWithin(2, -4) //[12,34,34,56,56]
   
   [].copyWithin.call({2: 1,length: 4}, 0, 2) //{0: 1, 2: 1, length: 4}
   ```

   