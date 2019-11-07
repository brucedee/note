# update

Vue的_update方法就是把vnode渲染成真实的DOM。它核心就是调用vm.__patch__方法。其实就是调用原生DOM的API，动态创建DOM

* 首次渲染
  * 虚拟节点通过createElm方法，创建真实的DOM并插入到它的父节点中
  * 再通过createChildren方法创建子元素，实际上就是遍历子元素，递归调用createElm
  * 接着再调用invokeCreateHooks方法执行所有的create钩子，并把vnode push到insertedVnodeQueue
  * 最后调用insert方法把DOM插入到父节点中。因为是递归调用，子元素会优先调用insert，所以整个vnode树节点插入到顺序是先子后父

* 数据更新



初始化到最终渲染的过程

new Vue -》init-》$mount-》compile？-》render-》vnode-》patch-》DOM