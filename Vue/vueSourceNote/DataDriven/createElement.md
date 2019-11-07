# createElement

创建vnode。每个vnode有children，children每个元素也是vnode，形成vnode Tree。很好的描述了DOM Tree

* children规范化：vdom是一个树状结构，每一个vnode可能会有若干字节点，子节点也应该是vnode类型。children可能是任意类型，因此需要规范

  * simpleNormalizeChildren:  调用场景render函数是编译生成的
  * normalizeChildren:
    * 一个场景是render函数是用户手写的，当children只有一个节点的时候。vuejs允许把children写成基础类型，会调用createTextVNode创建一个文本节点的vnode
    * 另一个场景是当编译slot、v-for的时候会产生嵌套数组的情况。会调用normalizeArrayChildren方法，遍历children，获得单个节点，如果是数组类型，则递归调用normalizeArrayChildren

  * 经过对children的规范化，children变成了一个类型为vnode的数组

* 创建

  * tag是string类型
    * 内置节点-》直接创建普通vnode
    * 已注册组件名字-》createComponent创建组件类型vnode
    * 其他-》创建未知标签的vnode

  * tag是Component类型
    * 直接调用createComponent创建组件类型vnode