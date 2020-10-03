
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
            children.concat([_c('path',{attrs:{"d":"M33 8h-7v2h6v20H4V10h6V8H3a1 1 0 00-1 1v22a1 1 0 001 1h30a1 1 0 001-1V9a1 1 0 00-1-1z"}}),_c('path',{attrs:{"d":"M24.793 14H20V.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V14h-4.793a.5.5 0 00-.353.854L18 22l7.146-7.146a.5.5 0 00-.353-.854z"}})])
          )
        }
      }
    