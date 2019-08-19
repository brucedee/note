//引入方式
//esModule
//--按需引入
import compact from 'lodash/compact';
import difference from 'lodash/difference';
console.log(compact([3, '', 0, false, 'seryrt'])); // [3, "seryrt"]
console.log(difference([1, 2, 3], [4, 3, 5])); // [1, 2]

//--还是会引入全部lodash
// import { compact, difference } from 'lodash'; //import _ from 'lodash';
// console.log(compact([3, '', 0, false, 'seryrt']));
// console.log(difference([1, 2, 3], [4, 3, 5]));

//-commonjs Module
var _ = require('lodash');
console.log(_.defaults({ a: 1 }, { a: 3, b: 5 })); // {a: 1, b: 5}

//常用函数
//-debounce防抖 throttle节流
const db = document.getElementById('db');
const tr = document.getElementById('tr');

db.addEventListener(
  'keyup',
  _.debounce(function(e) {
    console.log(e.target.value);
  }, 1000)
);

tr.addEventListener(
  'keyup',
  _.throttle(function(e) {
    console.log(e.target.value);
  }, 1000)
);
