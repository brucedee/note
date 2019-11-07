# 计算属性vs侦听属性

* computed -》计算属性本质，是一个computed watcher

  确保不仅仅是计算属性依赖的值发生变化，而是当计算属性最终的值发生变化，才会触发渲染watcher重新渲染

* watch-》侦听属性本质上也是基于watcher实现的，是一个user watcher

  通过vm.$watch创建，在对watcher求值以及在执行回调函数的时候，会处理一下错误

* watcher options

  * deep watcher

    ```javascript
    const vm = new Vue({
      data: {
        a: {
          b:1
        }
      },
      watch: {
        a: {
          deep: true,
            handler(newVal){
              ...
            }
        }
      }
    })
    
    
    ```

    

  * user watcher

  * computed watcher

  * sync watcher

* 应用场景

  计算属性适合用在模版渲染中，某个值是依赖了其它响应式对象、甚至计算属性计算而来

  侦听属性适合观测某个值的变化，去完成一段复杂的业务逻辑