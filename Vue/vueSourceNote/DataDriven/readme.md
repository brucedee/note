# 数据驱动

视图是由数据驱动生成的。对视图的修改不会直接操作DOM，而是通过修改数据。DOM变成了数据的映射，所有的逻辑都是对数据的修改

```javascript
<div id="app">
  {{msg}}
</div>
```

```javascript
const vm = new Vue({
	el:"#app",
  data: {
    msg: 'hello vue'
  }
})
```

