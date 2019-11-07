# codegen

把优化后的ast树，转换成可执行的，代码字符串

```javascript
<ul :class="bindCls" class="list" v-if="isShow">
    <li v-for="(item,index) in data" @click="clickItem(index)">{{item}}:{{index}}</li>
</ul>
```

```javascript
// 经过编译，执行const code = generate(ast,options),生成的render代码串
with(this){
  return (isShow) ?
    _c('ul', {
        staticClass: "list",
        class: bindCls
      },
      _l((data), function(item, index) {
        return _c('li', {
          on: {
            "click": function($event) {
              clickItem(index)
            }
          }
        },
        [_v(_s(item) + ":" + _s(index))])
      })
    ) : _e()
}
```

总结：

codegen过程就是深度遍历ast树，根据不同的条件生成不同的代码