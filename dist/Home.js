
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
            children.concat([_c('path',{attrs:{"d":"M35.332 20.25L18.75 3.668a1.063 1.063 0 00-1.5 0L.668 20.25a1.061 1.061 0 000 1.5l1.958 1.957a1 1 0 00.707.293H4v9a1 1 0 001 1h8a1 1 0 001-1V23a1 1 0 011-1h6a1 1 0 011 1v10a1 1 0 001 1h8a1 1 0 001-1v-9h.667a1 1 0 00.707-.293l1.958-1.957a1.061 1.061 0 000-1.5z"}})])
          )
        }
      }
    