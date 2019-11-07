# vue实例挂载的实现

所有Vue组件的渲染最终都需要render方法

* 对el(挂载点)作了限制，Vue不能挂载到body，html这样的根节点上

* 无论是.vue单文件方式，还是写template属性的方式，最终都会转换成render方法（必须有el，可以只有el）。如果没有定义，则调用compileToFunctions把template字符串转换成render方法

* 然后其实就是调用mountComponent方法。核心就是实例化一个渲染Watcher（两个作用，初始化时执行回调，实例检测的数据变化时执行回调），在它的回调函数中会调用updateComponent方法。

  ```javascript
  callhook(vm,'beforeMount')
  
  updateComponent = ()=>{
    vm._update(vm._render(),hydrating)
  }
  
  if(vm._isMounted){ //已经挂载
    callhook(vm,'beforeUpdate')
  }
  
  if(vm.$vnode == 'null'){
     vm.isMounted = true
     callhook(vm,'mounted')
  }
  ```

  在此方法中，先调用render方法生成vnode，最后用update方法更新DOM