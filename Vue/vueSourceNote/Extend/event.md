# event

组件通讯，原生交互，都离不开事件

* 编译
  * parse阶段，会执行processAttrs方法
  * processAttrs对标签属性的处理是，首先parseModifiers解析出修饰符，然后判断如果是事件，则执行addHandler(el,name,value,modifiers,false,warn)方法
  * addHandler做了3件事
    * 根据modifier修饰符对事件名name做处理
    * 根据modifier.native判断是原生事件还是普通事件，分别对应el.nativeEvents和el.events
    * 最后按照name对事件归类，并把回调函数的字符串保留到对应的事件中

* DOM事件

  * add(event,handler,once,capture,passive)和remove(event,handler,capture,_target)的逻辑很简单

  * 实际上调用addEventListener和removeEventListener，并根据参数传递一些配置

  * 注意这里handler会调用withMacroTask(handler)包裹一下，就是强制DOM事件回调函数，执行期间如果修改了数据，这些修改数据推入的队列，当做macroTask在nextTick后执行

* 自定义事件
  * 只能作用在组件上，组件上要使用原生事件，需要加.native修饰符。普通元素使用.native无效
  * add和remove是利用vue定义的事件中心

总结：

* vue支持两种事件类型，原生DOM事件和自定义事件

* 主要区别是添加和删除事件的方式不一样。并且自定义事件的派发，是往当前实例上派发，但可以利用在父组件上定义的回调函数，实现父子通讯

  

