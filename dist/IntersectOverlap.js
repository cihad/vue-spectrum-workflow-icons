
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
            children.concat([_c('path',{attrs:{"d":"M31 12h-7V5a1 1 0 00-1-1H5a1 1 0 00-1 1v18a1 1 0 001 1h7v7a1 1 0 001 1h18a1 1 0 001-1V13a1 1 0 00-1-1zm-19 1v9H6V6h16v6h-9a1 1 0 00-1 1zm18 17H14v-6h10V14h6z"}})])
          )
        }
      }
    