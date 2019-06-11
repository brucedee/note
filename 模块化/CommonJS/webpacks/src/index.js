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
console.log(a.counter);
console.log('--------------------------------------');

const $ = require('jquery');
$('p').css('color', 'red');
console.dir($);
console.log('--------------------------------------');

import { b1, b2 } from './b';
console.log(b1, b2);
export const zz = 22;

// 引用es6时，CommonJS形式导出会报错
// exports.zz = 22;
// module.exports = {};
