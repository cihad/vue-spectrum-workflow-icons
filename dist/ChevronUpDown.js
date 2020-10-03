
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
            children.concat([_c('path',{attrs:{"d":"M28 11.98a2 2 0 01-3.411 1.411l-6.577-6.573-6.578 6.572a2 2 0 01-2.874-2.773l.049-.049L16.6 2.585a2 2 0 012.825 0l7.989 7.983A1.989 1.989 0 0128 11.98zM8 24.02a2 2 0 013.411-1.411l6.578 6.572 6.578-6.572a2 2 0 012.874 2.773l-.049.049-7.992 7.983a2 2 0 01-2.825 0l-7.989-7.983A1.989 1.989 0 018 24.02z"}})])
          )
        }
      }
    