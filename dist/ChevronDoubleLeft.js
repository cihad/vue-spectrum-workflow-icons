
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
            children.concat([_c('path',{attrs:{"d":"M6 18a1.988 1.988 0 00.585 1.409l7.983 7.98a2 2 0 102.871-2.772l-.049-.049L10.819 18l6.572-6.57a2 2 0 00-2.773-2.87l-.049.049-7.983 7.98A1.988 1.988 0 006 18z"}}),_c('path',{attrs:{"d":"M18 18a1.988 1.988 0 00.585 1.409l7.983 7.98a2 2 0 102.871-2.772l-.049-.049L22.819 18l6.572-6.57a2 2 0 00-2.773-2.87l-.049.049-7.983 7.98A1.988 1.988 0 0018 18z"}})])
          )
        }
      }
    