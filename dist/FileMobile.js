
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
            children.concat([_c('path',{attrs:{"d":"M10 2v10H0L10 2zm23 6H19a1 1 0 00-1 1v24a1 1 0 001 1h14a1 1 0 001-1V9a1 1 0 00-1-1zm-8 2h2a1 1 0 010 2h-2a1 1 0 010-2zm1 23.1a2.1 2.1 0 112.1-2.1 2.1 2.1 0 01-2.1 2.1zm6-5.1H20V14h12z"}}),_c('path',{attrs:{"d":"M16 32V8.481A2.481 2.481 0 0118.481 6H26V3a1 1 0 00-1-1H12v11a1 1 0 01-1 1H0v19a1 1 0 001 1h15.557A3.953 3.953 0 0116 32z"}})])
          )
        }
      }
    