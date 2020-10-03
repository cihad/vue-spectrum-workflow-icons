
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
            children.concat([_c('path',{attrs:{"d":"M35 2H1a1 1 0 00-1 1v24a1 1 0 001 1h13v3a1 1 0 01-1 1h-2a1 1 0 00-1 1v2a1 1 0 001 1h14a1 1 0 001-1v-2a1 1 0 00-1-1h-2a1 1 0 01-1-1v-3h13a1 1 0 001-1V3a1 1 0 00-1-1zm-3 22H4V6h28z"}})])
          )
        }
      }
    