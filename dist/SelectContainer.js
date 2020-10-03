
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
            children.concat([_c('path',{attrs:{"d":"M33 6H7a1 1 0 00-1 1v26a1 1 0 001 1h26a1 1 0 001-1V7a1 1 0 00-1-1zM14 32H8v-4h6zm0-6H8v-4h6zm0-6H8v-4h6zm18 12H16v-4h16zm0-6H16v-4h16zm0-6H16v-4h16zm0-6H8V8h24z"}}),_c('path',{attrs:{"d":"M4 4h26V3a1 1 0 00-1-1H3a1 1 0 00-1 1v26a1 1 0 001 1h1z"}})])
          )
        }
      }
    