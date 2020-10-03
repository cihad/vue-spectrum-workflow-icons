
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
            children.concat([_c('path',{attrs:{"d":"M33 6h-5V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H10V3a1 1 0 00-1-1H7a1 1 0 00-1 1v3H1a1 1 0 00-1 1v26a1 1 0 001 1h32a1 1 0 001-1V7a1 1 0 00-1-1zm-1 26H2V8h4v1a1 1 0 001 1h2a1 1 0 001-1V8h14v1a1 1 0 001 1h2a1 1 0 001-1V8h4z"}}),_c('path',{attrs:{"d":"M6 12h4v4H6zm6 0h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zM6 18h4v4H6zm6 0h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zM6 24h4v4H6zm6 0h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4z"}})])
          )
        }
      }
    