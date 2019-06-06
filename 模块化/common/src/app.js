console.log('app');

var $ = require('jquery');
$(document).ready(function() {
  $('#demo').html('<i>hello</i>');
});

var moduleA = require('./a');
moduleA.print();

var moduleB = require('./b');
console.log(moduleB.counter);
moduleB.increment();
console.log(moduleB.counter);
moduleB.increment();
console.log(moduleB.counter);
