console.log('----------a2----------');
import { b2, b22, b2func1, b2func2 } from './b2.js';
console.log(b2);
console.log(b22);
b2func1();
b2func2();
console.log('---');
import * as b2All from './b2.js';
console.log(b2All.b2);
console.log(b2All.b22);
b2All.b2func1();
b2All.b2func2();

/* console.log('---');
import zz from './b2.js';
console.log(zz); */
