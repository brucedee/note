# optimize

vue是数据驱动，响应式的

但是模板并不是所有数据都是响应式的，很多数据首次渲染后就永远不会变化的。那这部分数据生成的DOM也不会变化，patch的过程，就可以跳过对比

* 标记静态节点markStatic(root)
* 标记静态根markStaticRoots(root,false)

总结：

​	optimize的过程，就是深度遍历ast树，检测每一颗子树是不是静态节点

​	是静态节点，则它们生成的DOM不变，对运行时对模板的更新，起到极大优化作用