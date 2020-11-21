const arr = [3, 6, 9].map((item) => item * 2);
console.log(arr);
console.log("--------------------------------------");

const a = require("./a");
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
console.log("need wait loading moduleA");
console.log("--------------------------------------");

const $ = require("jquery");
//import $ from 'jquery'; //也可以
$("p").css("color", "green");
console.dir($);
console.log("--------------------------------------");

import { b1, b3, bb, bbb } from "./b"; // npm run build 打包后有61(b1),62(b2)没有，说明b.js只引入了用到的
console.log(b1);
console.log(b3); // 63
setTimeout(() => {
  console.log(b3); // 6633 动态值
}, 2000);
console.log(bb);
console.log("bbb：" + bbb);
export const zz = 22;
const { c1 } = require("./c"); // npm run build 打包后123(c1),456(c2)都有，说明c.js全部引入了
console.log(c1);

// 引用es6时，CommonJS形式导出会报错
// exports.zz = 22;
// module.exports = {};

//import()
// -按需加载
var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  import("./d0");
});
// -条件加载-》如果直接写true或者false，则会'静态分析' 不会打包false的那个模块
if (Math.random() > 0.5) {
  import("./d1");
} else {
  import("./d2");
}
// -动态模块路径
function getPath() {
  return "./d3";
}
/* console.log(getPath());
import(getPath()).then(() => { // Cannot find module './d3'
  console.log('hh');
});
 */
// --动态路径需要模板字符串
console.log(`${getPath()}`);
import(`${getPath()}`).then((obj) => {
  console.log(obj);
});

//循环加载
// -commonJS
// --f.js里，e.js并没执行完，只执行了第一行
const goe = require("./e");
console.log("eif:" + goe.eif);
console.log("----");
const gof = require("./f"); // --gof并没有再执行,得到f.js的缓存执行结果
console.log("fif:" + gof.fif);

// -es6
// -动态引用,需要开发者自己保证取到值
import { g1 } from "./g";
console.log(g1);
import * as h from "./h"; // --也不会再执行
console.log(h);

console.log("------------------index-------------------");
