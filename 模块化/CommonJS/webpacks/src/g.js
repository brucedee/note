export const g1 = 'g1..';
export function g11() {
  //函数提升，在import的时候就定义了
  return 'g11...';
}
import { h1 } from './h';
console.log('h1:' + h1);
console.log('g.js执行完毕');
