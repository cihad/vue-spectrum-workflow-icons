
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
            children.concat([_c('path',{attrs:{"d":"M33 6H5a1 1 0 00-1 1v20a1 1 0 01-2 0V10.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V27a3 3 0 003 3h28a3 3 0 003-3V7a1 1 0 00-1-1zm-2 22H6V8h26v19a1 1 0 01-1 1z"}}),_c('path',{attrs:{"d":"M20 12h10v2H20zm0 8h10v2H20zM8 24h10v2H8zm12-8h10v2H20zm0 8h10v2H20zM8 12h10v10H8z"}})])
          )
        }
      }
    