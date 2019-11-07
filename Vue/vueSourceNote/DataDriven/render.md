# render

_render()方法是实例的一个私有方法，把实例渲染为虚拟Node

```html
<div id="app">
  {{msg}}
</div>
```

```javascript
//相当于
render: function(createElement){
  return createElement('div',{
    attrs: {
      id: 'app'
    }
  },this.message)
}
```

```javascript
//createElement即$createElement
Vue.prototype._render = function():VNode{
  let vnode
  try{
    vnode = render.call(vm._renderProxy,vm.$createElement)
  }catch()
}
//$createElement是initRender的时候定义的
export function initRender(vm:Component){
  //模版编译成render函数使用
  vm._c = (a,b,c,d) => createElement(vm,a,b,c,d,false)
  //用户手写render方法使用
  vm.$createElement = (a,b,c,d) => createElement(vm,a,b,c,d,true)
}
```

vm._render最终是通过执行createElement方法，并返回vnode

