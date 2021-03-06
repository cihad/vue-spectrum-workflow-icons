
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
            children.concat([_c('path',{attrs:{"d":"M20 11V2H7a1 1 0 00-1 1v30a1 1 0 001 1h22a1 1 0 001-1V12h-9a1 1 0 01-1-1z"}}),_c('path',{attrs:{"d":"M22 2h.086a1 1 0 01.707.293l6.914 6.914a1 1 0 01.293.707V10h-8z"}})])
          )
        }
      }
    