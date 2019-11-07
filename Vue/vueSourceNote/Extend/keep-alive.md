# keep-alive

vue源码不仅实现了，一套组件化的机制。也实现了一些内置组件，keep-alive是一个内置组件，为组件作了缓存处理

* keep-alive组件是一个抽象组件。它的实现，通过自定义render函数并利用插槽，并且缓存vnode

* patch过程，对于已缓存的组件，不会执行mounted，所以不会有，一般组件的生命周期。但是又提供了activated和deactivated钩子函数

  渲染分为首次渲染和缓存渲染，当命中缓存，则不会再执行created和mounted钩子函数，而会执行activated钩子函数。销毁时也不会执行destroyed钩子函数，而会执行deactivated钩子函数

* keep-alive的prop除了include和exclude之外，还有max，控制缓存个数