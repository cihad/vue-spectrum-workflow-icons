
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
            children.concat([_c('circle',{attrs:{"cx":"15.8","cy":"13.393","r":"2.5"}}),_c('path',{attrs:{"d":"M29.668 23.722L35.8 18l-6.132-5.708a1 1 0 00-1.668.743V16h-7.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5H28v2.978a1 1 0 001.668.744z"}}),_c('path',{attrs:{"d":"M24.875 6H1.125A1.068 1.068 0 000 7v22a1.068 1.068 0 001.125 1h23.75A1.068 1.068 0 0026 29v-7h-2v2c-1.791-1.058-3.067-1.84-4.628-1.84-2.938 0-2.893 2.029-5.833 2.029s-3.274-4.438-6.213-4.438C4.654 19.751 2 24 2 24V8h22v6h2V7a1.068 1.068 0 00-1.125-1z"}})])
          )
        }
      }
    