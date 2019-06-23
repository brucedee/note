with (this) {
  return _c('div', { attrs: { id: 'app' } }, [
    _c('input', {
      directives: [
        { name: 'model', rawName: 'v-model', value: tit, expression: 'tit' }
      ],
      attrs: { type: 'text' },
      domProps: { value: tit },
      on: {
        input: function($event) {
          if ($event.target.composing) return;
          tit = $event.target.value;
        }
      }
    }),
    _v(' '),
    _c('button', { on: { click: todo } }, [_v('点击')]),
    _v(' '),
    _c(
      'ul',
      _l(liArr, function(item, index) {
        return _c('li', [
          _v('\n          ' + _s(item) + ' '),
          _c(
            'span',
            {
              on: {
                click: function($event) {
                  del(index);
                }
              }
            },
            [_v('x')]
          )
        ]);
      })
    )
  ]);
}
