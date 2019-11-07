# Map

1. 基本--Map构造函数生成一种新的数据结构。类似对象(Object结构为键-值)，是一种键值对集合，但键不限于字符串(Map结构为值-值)。传入具有 iterable 接口，且每个成员都是2个元素的数据，数组、Map、Set

   ```javascript
   let arr1 = [[3, 'dryt'], [{ name: 'vv' }, true], [3 / 'ert', 99],[{age:18},100]];
   
   let m1 = new Map(arr1);
   m1 //Map(4) {3 => "dryt", {…} => true, NaN => 99, {…} => 100}
   [...m1] //[[3, "dryt"],[{name: 'vv'}, true],[NaN,99],[{age:18},100]]
   
   let m11 = new Map();
   arr1.forEach(([key,value])=>m11.set(key,value));
   m11 //Map(4) {3 => "dryt", {…} => true, NaN => 99, {…} => 100}
   Array.from(m11) //[[3, "dryt"],[{name: 'vv'}, true],[NaN,99],[{age:18},100]]
   ```

   ```javascript
   let m12 = new Map([[NaN, 12], [NaN, 15], [+0, 'aa'], [0, 'bb'],[-0,'cc']]);
   m12 //Map(2) {NaN => 15, 0 => "cc"}
   //基本相当于全等。除了NaN等于NaN,所以这里最后只剩一个NaN
   ```

2. 属性方法--size set get delete clear has

   ```javascript
   let m2 = new Map();
   m2.set('a', 3);
   m2.set('b', 4).set('c', 5).set({}, 'i am obj');
   
   m2 //Map(4) {"a" => 3, "b" => 4, "c" => 5, {…} => "i am obj"}
   m2.size //4
   m2.get('a') //3
   m2.get({}) //undefined
   m2.has('b') //true
   m2.has({}) //false
   
   m2.delete('b');
   m2 //Map(3) {"a" => 3, "c" => 5, {…} => "i am obj"}
   m2.size //3
   m2.has('a') //false
   
   m2.clear();
   m2 //Map(0) {}
   m2.size //0
   ```

3. 遍历 -- keys，values，entries，forEach

   ```javascript
   let m3 = new Map([['name', 'hua'], ['age', 18]]);
   for (let k of m3.keys()) {
       console.log(k); //name age
   }
   for (let v of m3.values()) {
       console.log(v); //hua 18
   }
   for (let [k, v] of m3.entries()) {
       console.log(k, v); 
       //name hua
       //age 18
   }
   
   //Map结构实例默认可遍历，它的默认遍历器生成函数为其entries方法
   Map.prototype[Symbol.iterator] === Map.prototype.entries //true
   for (let item of m3) {
       console.log(item);
       //['name','hua']
       //['age', 18]
   }
   
   [...m3.keys()] //["name", "age"]
   [...m3.values()] //["hua", 18]
   [...m3.entries()] //[['name', 'hua'], ['age', 18]]
   [...m3] //[['name', 'hua'], ['age', 18]]
   ```

   ```javascript
   m3.forEach((value, key, map) => {
       console.log(value, key);
       //hua name
       //18 age
   })
   ```

4. 数据转换

   ```javascript
   //Map->对象
   let m41 = new Map([['a', 3], [6, true]], [{name:'gg'},18]);
   function MapToObj(map) {
       let obj = {};
       for (let [k, v] of map) {
           obj[k] = v;
       }
       return obj;
   }
   MapToObj(m41) //{'6': true, 'a': 3, '[object Object]': 18}
   //Map键名会转为字符串
   ```

   ```javascript
   //对象->Map
   let obj42 = {
       name: 'dada',
       18: false
   };
   function ObjToMap(obj) {
       let map = new Map();
       for (let [k, v] of Object.entries(obj)) {
           map.set(k, v);
       }
       return map;
   }
   ObjToMap(obj42) //Map(2) {"18" => false, "name" => "dada"}
   ```

   ```javascript
   //Map->JSON
   let map43 = new Map();
   map43.set('hello', false).set(7, 'go');
   let map44 = new Map();
   map44
       .set(true, 7)
       .set({ foo: 3 }, ['abc'])
       .set({}, 87);
   
   function MapToObj(map) {
       let obj = {};
       for (let [k, v] of map) {
           obj[k] = v;
       }
       return obj;
   }
   
   //-Map键名能转为字符串时,转为对象JSON
   function MapToJson1(map) {
       return JSON.stringify(MapToObj(map));
   }
   MapToJson1(map43) //{"7":"go","hello":false}
   MapToJson1(map44) //{"true":7,"[object Object]":87}
   //-Map键名不好转为字符串时,转为数组JSON 
   function MapToJson2(map) {
       return JSON.stringify([...map]);
   }
   MapToJson2(map43) //[["hello",false],[7,"go"]]
   MapToJson2(map44) //[[true,7],[{"foo":3},["abc"]],[{},87]]
   ```

   ```javascript
   //JSON->Map
   let json1 = '{"7":"go","hello":false}';
   let json2 = '[[true,7],[{"foo":3},["abc"]],[{},87]]'
   
   //-对象JSON时
   function jsonToMap1(json) {
       return ObjToMap(JSON.parse(json));
   }
   jsonToMap1(json1) //Map(2) {"7" => "go", "hello" => false}
   jsonToMap1(json2) //Map(3) {"0" => Array(2), "1" => Array(2), "2" => Array(2)}
   //-数组JSON时
   function jsonToMap2(json) {
       return new Map(JSON.parse(json));
   }
   //jsonToMap2(json1) //object is not iterable 
   jsonToMap2(json2) //Map(3) {true => 7, {…} => Array(1), {…} => 87}
   ```

   