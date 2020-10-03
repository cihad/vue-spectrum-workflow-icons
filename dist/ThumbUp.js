
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
            children.concat([_c('rect',{attrs:{"height":"18","rx":"1","ry":"1","width":"6","x":"2","y":"14"}}),_c('path',{attrs:{"d":"M30.967 14H21a54.94 54.94 0 001-9.08C22 3.259 20.968 2 20 2a1.839 1.839 0 00-2 2 11.326 11.326 0 01-2.516 6.258A46.35 46.35 0 0110 15.042V30s2.809-.033 14 0a3.946 3.946 0 003.677-2.424l5.128-10.788A2 2 0 0030.967 14z"}})])
          )
        }
      }
    