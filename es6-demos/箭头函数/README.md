# 箭头函数

1. 简化函数

   ```javascript
   const fn = function(a,b){
       return a * b;
   }
   fn(1,5) //5
   const fn1 = (a, b) => {
       return a * b;
   };
   fn1(2,5) //10
   ```

2. 如果只有一个参数，可以省略()

   ```javascript
   const fn2 = p => {
       return p*2;
   };
   fn2(6) //12
   ```

3. 如果只有一个return，可以省略{}

   ```javascript
   const fn3 = p => Math.pow(p,2);
   fn3(4) //16
   ```

4. 箭头函数没有arguments

   ```javascript
   const fn4 = function(a,b,c){
       console.log(arguments)
   }
   fn4(3,6,9) //Arguments(3) [3, 6, 9, callee: ƒ, Symbol(Symbol.iterator): ƒ]
   
   const fn44 = (a,b,c)=>{
       console.log(arguments)
   }
   fn44(2,4,6)
   //Uncaught ReferenceError: arguments is not defined
   ```

5. this指向

   ```javascript
   this //window
   if(true){
       console.log(this) //window
   }
   function fn6(){
       console.log(this) //window,严格模式下是undefined
   }
   fn6() 
   ```

   ```javascript
   const objs = {
       f1: function() {
           console.log(this);
       },
       f2: () => {
           console.log(this);
       }
   };
   objs.f1(); //{f1: ƒ, f2: ƒ}
   objs.f2(); //window
   ```


6. 默认值(不限于箭头函数)

   ```javascript
   function fn5(a,b){
       var b = b || 2;
       return a+b
   }
   fn5(1) //3
   fn5(1,0) //3 本应为1
   fn5(1,'') //3 本应为'1'
   ```

   ```javascript
   let fn55 = (a,b=2) => a+b;  //改为普通函数赋默认值亦可
   fn55(1) //3
   fn55(1,0) //1
   fn55(1,'') //'1'
   ```

   

