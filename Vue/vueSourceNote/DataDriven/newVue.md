# newVue

```javascript
// 构造函数
function Vue(options){
  if(process.env.NODE_ENV !== 'production' && !(this instanceof Vue)){
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
```

```javascript
Vue.prototype._init = function(options?:Object){
  const vm:Component = this
  ...
  if(options && options._isComponent){
    initInternalComponent(vm,options)
  }else{
    vm.$options = mergeOptions(
    	resolveConstructorOptions(vm.constructor),
      options || {},
      vm
    )
  }
  ...
  // 初始化
  initLifecycle(vm)
  initEvents(vm)
  initRender(vm)
  callHook(vm,'beforeCreate')
  initInjections(vm)
  initState(vm)
  initProvide(vm)
  callhook(vm,'created')
  ...
  // 实例挂载
  if(vm.$options.el){
    vm.$mount(vm.$options.el)
  }
}
```

* 调用this._init(options)初始化，主要是
  * mergeOptions-》合并配置
  * initLifecycle-》初始化生命周期
  * initEvents-》初始化事件中心
  * initRender-》初始化渲染
  * callhook(vm,'beforeCreate')-》触发beforeCreate钩子
  * … 
  * initState-》初始化State(data props  computed watcher等)
  * ...
  * callhook(vm,'created')-》触发created钩子

