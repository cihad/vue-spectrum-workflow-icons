
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
            children.concat([_c('path',{attrs:{"d":"M6 9v24a1 1 0 001 1h26a1 1 0 001-1V9a1 1 0 00-1-1H7a1 1 0 00-1 1zm26 23H8V14h24z"}}),_c('path',{attrs:{"d":"M4 6h26V3a1 1 0 00-1-1H3a1 1 0 00-1 1v24a1 1 0 001 1h1z"}}),_c('path',{attrs:{"d":"M6 9v24a1 1 0 001 1h26a1 1 0 001-1V9a1 1 0 00-1-1H7a1 1 0 00-1 1zm26 23H8V14h24z"}}),_c('path',{attrs:{"d":"M4 6h26V3a1 1 0 00-1-1H3a1 1 0 00-1 1v24a1 1 0 001 1h1z"}})])
          )
        }
      }
    