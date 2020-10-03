
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
            children.concat([_c('rect',{attrs:{"height":"7","rx":"1","ry":"1","width":"7","x":"14.5","y":"14.5"}}),_c('path',{attrs:{"d":"M29.5 12a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5V8H12V6.5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5v5a.5.5 0 00.5.5H8v12H6.5a.5.5 0 00-.5.5v5a.5.5 0 00.5.5h5a.5.5 0 00.5-.5V28h12v1.5a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5H28V12zM26 24h-1.5a.5.5 0 00-.5.5V26H12v-1.5a.5.5 0 00-.5-.5H10V12h1.5a.5.5 0 00.5-.5V10h12v1.5a.5.5 0 00.5.5H26z"}})])
          )
        }
      }
    