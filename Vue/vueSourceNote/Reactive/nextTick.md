# nextTick

* js的运行机制-》单线程 基于事件循环
  * 所有同步任务都在主线程上执行，形成一个“执行栈”
  * 主线程外，还存在一个“任务队列”。只要异步任务有了运行结果，就在“任务队列”中放置一个事件
  * 一旦“执行栈”中所有的同步任务执行完毕。系统就会读取“任务队列”，看看里面有哪些事件。于是那些对应的异步任务，就结束等待状态，进入执行栈，开始执行
  * 主线程重复第三步

主线程的执行过程就是一个tick，而所有的异步结果都是通过“任务队列”来调度。

* vue中的nextTick实现
  * 申明2个变量，macroTimerFunc、microTimerFunc分别对应macro task、micro task函数
  * 对于macro task的实现，先检测是否原生支持setImmediate(ie10+)，不支持再检测是否原生支持MessageChannel，再不支持的话降级为setTimeout 0
  * 对于micro task的实现，则检测是否原生支持promise，不支持的话直接指向macro task的实现
  * nextTick把传入的回调函数cb压入callbacks数组，最后一次性的根据useMacroTask条件执行macroTimerFunc或microTimerFunc。它们都会在下一个tick执行flushCallbacks(遍历callbacks，执行相应的回调函数)

* nextTick调用方式
  * 实例上vm.$nextTick
  * 全局API Vue.nextTick

使用 callbacks 是保证在同一个 tick 内多次执行 nextTick，不会开启多个异步任务，而把这些异步任务都压成一个同步任务，在下一个 tick 执行完毕 



结合nextTick和setter的分析，能了解到数据的变化到DOM的重新渲染是一个异步过程，发生在下一个tick

```javascript
getData().then((res)=>{
  this.xx = res.data
  this.$nextTick(()=>{
    //这里可以获取变化后的DOM
  })
})
```

