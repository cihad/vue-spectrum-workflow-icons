
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
            children.concat([_c('path',{attrs:{"d":"M33 2H5a1 1 0 00-1 1v30a1 1 0 001 1h11V22h6v12h11a1 1 0 001-1V3a1 1 0 00-1-1zM12 26H6v-4h6zm0-8H6v-4h6zm0-8H6V6h6zm10 8h-6v-4h6zm0-8h-6V6h6zm10 16h-6v-4h6zm0-8h-6v-4h6zm0-8h-6V6h6z"}})])
          )
        }
      }
    