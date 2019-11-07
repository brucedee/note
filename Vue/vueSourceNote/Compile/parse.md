# parse

编译过程首先就是解析模板，生成AST，它是一种抽象语法树。是对源代码的抽象语法结构，树状表现形式

在很多编译技术中，如babel编译ES6的代码都会先生成AST

```javascript
<ul :class="bindCls" class="list" v-if="isShow">
    <li v-for="(item,index) in data" @click="clickItem(index)">{{item}}:{{index}}</li>
</ul>
```

```javascript
// parse后
ast = {
  'type': 1,
  'tag': 'ul',
  'attrsList': [],
  'attrsMap': {
    ':class': 'bindCls',
    'class': 'list',
    'v-if': 'isShow'
  },
  'if': 'isShow',
  'ifConditions': [{
    'exp': 'isShow',
    'block': // ul ast element
  }],
  'parent': undefined,
  'plain': false,
  'staticClass': 'list',
  'classBinding': 'bindCls',
  'children': [{
    'type': 1,
    'tag': 'li',
    'attrsList': [{
      'name': '@click',
      'value': 'clickItem(index)'
    }],
    'attrsMap': {
      '@click': 'clickItem(index)',
      'v-for': '(item,index) in data'
     },
    'parent': // ul ast element
    'plain': false,
    'events': {
      'click': {
        'value': 'clickItem(index)'
      }
    },
    'hasBindings': true,
    'for': 'data',
    'alias': 'item',
    'iterator1': 'index',
    'children': [
      'type': 2,
      'expression': '_s(item)+":"+_s(index)'
      'text': '{{item}}:{{index}}',
      'tokens': [
        {'@binding':'item'},
        ':',
        {'@binding':'index'}
      ]
    ]
  }]
}
```



流程：

* 从options中获取方法和配置
* 解析HTML模板
* 处理开始标签
* 处理闭合标签
* 处理文本内容

总结：

parse的目标是把template字符串，转换成ast树，它是一种用js对象的形式，来描述整个模板

整个parse的过程是利用正则顺序解析模板，当解析到开始标签，闭合标签，文本的时候，分别执行对应的回调函数，来达到构造ast树的目的

ast元素节点有3种类型，type1普通类型 2表达式3纯文本

ast构造完毕，下一步就是optimize优化这棵树