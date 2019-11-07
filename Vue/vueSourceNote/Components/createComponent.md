# createComponent

在createElement时，如果不是普通的html标签，就通过createComponent方法创建一个组件vnode

* 构造子类构造函数

  * 使用Vue.extend构造一个Vue的子类Sub

    这个子类继承了Vue。本身还扩展了一些属性，如扩展options，添加全局API等。还对配置中的props，computed作了初始化。还对Sub构造函数作了缓存，避免多次执行Vue.extend的时候对同一子组件重复构造

    ```javascript
    Vue.extend = function (extendOptions:Object):Function{
      extendOptions = extendOptions || {}
      Super = this
      ...
      const Sub = function VueComponent(options){
        this._init(options)
      }
      Sub.prototype = Object.create(Vue.prototype)
      Sub.prototype.constructor = Sub
      ...
      return Sub
    }
    ```

* 安装组件钩子函数 inStallComponentHooks(data)

  *  inStallComponentHooks就是把componentVNodeHooks的钩子函数合并到data.hook中，在vnode执行patch时执行相关的钩子函数
  * 合并中，如果某个时机的钩子，已经存在data.hook，则执行mergeHook函数作合并，逻辑就是最终执行时，依次执行这两个钩子函数

* 实例化vnode

  最后通过new VNode()，实例化一个vnode并返回。和普通元素节点的vnode不同，组件的vnode时没有children的

  ```javascript
  const name = Ctor.options.name || tag
  const vnode = new VNode(
  `vue-component-${Ctor.cid}${name ? `-{name}`: ''}`,
    data,undefined,undefined,undefined,context,
    {Ctor,propsData,listeners,tag,children},
    asyncFactory
  )
  return vnode
  ```

  