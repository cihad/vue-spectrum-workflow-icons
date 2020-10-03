
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
            children.concat([_c('path',{attrs:{"d":"M33 2H15a1 1 0 00-1 1v11h10v20h9a1 1 0 001-1V3a1 1 0 00-1-1zm-11 8h-6V6h6zm10 16h-6v-4h6zm0-8h-6v-4h6zm0-8h-6V6h6z"}}),_c('path',{attrs:{"d":"M2 17v16a1 1 0 001 1h18a1 1 0 001-1V17a1 1 0 00-1-1H3a1 1 0 00-1 1zm12 1h6v4h-6zM4 18h6v4H4zm0 8h6v4H4z"}})])
          )
        }
      }
    