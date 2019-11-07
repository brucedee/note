# 解构赋值

- 模式匹配，等号两边模式相同，左边的变量会被赋予相应的值

- 等号右边的值不是对象或数组，就先将其转为对象。右边null和undefined会报错

  ```javascript
  let [x] = null; //Uncaught TypeError: null is not iterable
  let [y] = undefined; //Uncaught TypeError: undefined is not iterable
  let {p:xx} = null; //Uncaught TypeError: Cannot destructure property `p` of 'undefined' or 'null'
  let {p:yy} = undefined; //Uncaught TypeError: Cannot destructure property `p` of 'undefined' or 'null'
  ```

- 声明和赋值分开问题

  ```javascript
  let m;
  [m]=[7];
  m //7
  
  let n;
  {n}={n:10}; //{}放在行首，js会把它理解为代码块，发生语法错误
  n //Uncaught SyntaxError: Unexpected token =
  
  let ns;
  ({ns}={ns:9}); //放在括号里ok
  ns //9
  ```

  ```javascript
  let [i,j]; //let i,j;就ok
  [i,j]=[7,9];
  console.log(i,j); //Uncaught SyntaxError: Missing initializer in destructuring declaration
  
  let {a,b}; //let a,b;然后下面加上括号就ok
  {a,b}={a:3,b:4};
  console.log(a,b); //Uncaught SyntaxError: Missing initializer in destructuring declaration
  ```

- 默认值，使用严格相等判断一个位置是否有值

  ```javascript
  let [z=1] = [undefined]; //或者let [z=1] = []
  z //1
  let [zz=1] = [null];
  zz //null
  
  let {p=2} = {p:undefined};//或者let {p=2} = {}
  p //2
  let {pp=2} = {pp:null};
  pp //null
  ```

  

1. [字符串](字符串.md)
2. [数值和布尔值](数值和布尔值.md)
3. [数组](数组.md)
4. [对象](对象.md)
5. [函数参数](函数参数.md)
6. [用例](用例.md)