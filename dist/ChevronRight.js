
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
            children.concat([_c('path',{attrs:{"d":"M24 18a1.988 1.988 0 01-.585 1.409l-7.983 7.98a2 2 0 11-2.871-2.772l.049-.049L19.181 18l-6.572-6.57a2 2 0 012.773-2.87l.049.049 7.983 7.98A1.988 1.988 0 0124 18z"}})])
          )
        }
      }
    