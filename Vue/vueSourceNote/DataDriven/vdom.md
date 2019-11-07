# vdom

* 浏览器的DOM元素是庞大的，操作昂贵。频繁的DOM更新，会产生一定的性能问题
* Virtual DOM就是用js对象去描述DOM节点。比创建真实的DOM代价小很多
* Vuejs中，Virtual DOM是用VNode(js对象)，这样一个Class去描述的
  * 几个关键属性：标签名、数据、子节点等。其他属性是用来扩展VNode的灵活性和一些特殊feature的
  * 只是用来映射到真实的DOM的渲染。不需要包含操作DOM的方法，因此非常轻量简洁
  * 除了数据结构的定义，映射到真实的DOM。要经历VNode的create、diff、patch等过程

