console.log("b.js start");
import { bs } from "./bs";
export const b1 = 61;
const b2 = 62;
let b3 = 63;
setTimeout(() => {
  b3 = 6633;
}, 2000);
export { b2, b3 };

export * from "./bb"; // '继承'自bb模块 但不包括bb模块里面的default
console.log("from b");
console.log("-----------import命令先于模块内其他语句执行-------------");
