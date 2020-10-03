
      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","height":"36","width":"36"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M5 18H4a2 2 0 00-2 2v13a1 1 0 001 1h2a1 1 0 001-1V19a1 1 0 00-1-1zm27 0h-1a1 1 0 00-1 1v14a1 1 0 001 1h2a1 1 0 001-1V20a2 2 0 00-2-2z"}}),_c('rect',{attrs:{"height":"8","rx":"1","ry":"1","width":"20","x":"8","y":"22"}}),_c('path',{attrs:{"d":"M22 4h-8a6 6 0 00-6 6v9a1 1 0 001 1h18a1 1 0 001-1v-9a6 6 0 00-6-6z"}})])
          )
        }
      }
    