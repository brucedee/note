const arr = [3, 6, 9].map(item => item * 2);
console.log(arr);
console.log('--------------------------------------');

const a = require('./a');
console.log(a);
// console.log(a.a1);
// a.afunc1();
console.log(a.a2);
a.afunc2();
console.log(a.counter);
a.increment();
console.log(a.counter);
a.increment();
console.log(a.counter); // 静态值
console.log('need wait loading moduleA');
console.log('--------------------------------------');

const $ = require('jquery');
//import $ from 'jquery'; //也可以
$('p').css('color', 'green');
console.dir($);
console.log('--------------------------------------');

import { b1, b3, bb, bbb } from './b'; // npm run build 打包后有61(b1),62(b2)没有，说明b.js只引入了用到的

console.log(b1);
console.log(b3); // 63
setTimeout(() => {
  console.log(b3); // 6633 动态值
}, 2000);

console.log(bb);
console.log(bbb);

export const zz = 22;

const { c1 } = require('./c'); // npm run build 打包后123(c1),456(c2)都有，说明c.js全部引入了
console.log(c1);

// 引用es6时，CommonJS形式导出会报错
// exports.zz = 22;
// module.exports = {};
