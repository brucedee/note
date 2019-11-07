# keys和values、entries

用于遍历数组。都返回一个遍历器（iterable）对象，可用for...of循环。keys()对应键值，values()对应键名，entries()对应键值对

```javascript
const arrof = [9, 45, 67, 3, 7];
for (const k of arrof.keys()) {
    console.log(k);
}
//0,1,2,3,4
for (const v of arrof.values()) {
    console.log(v);
}
for (const v of arrof) {
    console.log(v);
}
//9, 45, 67, 3, 7
for (const item of arrof.entries()) {
    console.log(item);
}
//[0,9],[1,45],[2,67],[3,3],[4,7]
```

