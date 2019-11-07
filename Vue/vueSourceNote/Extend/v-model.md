# v-model

vue的数据响应原理，理解为双向绑定是不准确的。一般提的数据响应，是通过数据改变驱动DOM视图变化

双向绑定除了数据驱动DOM外，DOM的变化反过来，影响数据，是双向关系。vue中可通过v-model实现

* 表单元素

  ```javascript
  let vm = new Vue({
    el: '#app',
    template: '<div>'
    + '<input v-model="message" placeholder="edit me">' +
    '<p>Message is: {{ message }}</p>' +
    '</div>',
    data() {
      return {
        message: ''
      }
    }
  })
  ```

  * parse阶段，v-model被当做普通的指令，解析到el.directives中。codegen阶段，执行genData，生成code

    ```javascript
    let code = genAssignmentCode(value, valueExpression)
    ->if($event.target.composing)return;message=$event.target.value
    ```

  * code生成之后，执行2句关键代码

    ```javascript
    addProp(el,'value',`(${value})`)
    addHandler(el,event,code,null,true)
    ```

    这实际是input实现v-model的精髓，通过修改AST元素。相当于在input上动态绑定了value和input事件

    装换成模板如下

    ```javascript
    <input 
    v-value="message" 
    v-on:input="message=$event.target.value" />
    ```

    其实就是动态绑定input的value，指向message。触发input事件时，动态设置message的值为目标值

  * 最终生成的，render代码

    ```javascript
    with(this) {
      return _c('div',[_c('input',{
        directives:[{
          name:"model",
          rawName:"v-model",
          value:(message),
          expression:"message"
        }],
        attrs:{"placeholder":"edit me"},
        domProps:{"value":(message)},
        on:{"input":function($event){
          if($event.target.composing)
            return;
          message=$event.target.value
        }}}),_c('p',[_v("Message is: "+_s(message))])
        ])
    }
    ```

* 组件

  ```javascript
  let Child = {
    template: '<div>'
    + '<input :value="value" @input="updateValue" placeholder="edit me">' +
    '</div>',
    props: ['value'],
    methods: {
      updateValue(e) {
        this.$emit('input', e.target.value)
      }
    }
  }
  
  let vm = new Vue({
    el: '#app',
    template: '<div>' +
    '<child v-model="message"></child>' +
    '<p>Message is: {{ message }}</p>' +
    '</div>',
    data() {
      return {
        message: ''
      }
    },
    components: {
      Child
    }
  })
  ```

  * 看到父组件引用子组件child的地方，使用v-model关联了数据message；子组件定义了一个value的prop，并且在input事件的回调函数中，通过`this.$emit('input',e.target.value)`派发了一个事件。为了让v-model生效，需要这两点

  * 相当于这样编写父组件

    ```javascript
    let vm = new Vue({
      el: '#app',
      template: '<div>' +
      '<child :value="message" @input="message=arguments[0]"></child>' +
      '<p>Message is: {{ message }}</p>' +
      '</div>',
      data() {
        return {
          message: ''
        }
      },
      components: {
        Child
      }
    })
    ```

  * 子组件传递的value，绑定到当前父组件的message。子组件派发input事件，父组件在事件回调函数中，修改message的值，同时value值也会发生变化，子组件的input值被更新

总结：

v-model本质上，是一种语法糖。即可以支持原生表单元素，也可以支持自定义组件。在组件的实现中，可以配置子组件接收prop名称，以及派发的事件名

```javascript
let Child = {
  template: '<div>'
  + '<input :value="msg" @input="updateValue" placeholder="edit me">' +
  '</div>',
  props: ['msg'],
  model: {
    prop: 'msg',
    event: 'change'
  },
  methods: {
    updateValue(e) {
      this.$emit('change', e.target.value)
    }
  }
}
```

