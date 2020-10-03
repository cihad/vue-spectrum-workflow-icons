
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
            children.concat([_c('path',{attrs:{"d":"M29 24a5 5 0 00-4.9 4H20a2 2 0 01-2-2V10a2 2 0 012-2h4.1a5 5 0 100-2H20a4 4 0 00-4 4v6h-4.1a5 5 0 100 2H16v8a4 4 0 004 4h4.1a5 5 0 104.9-6zm0-20a3 3 0 11-3 3 3 3 0 013-3zM7 20a3 3 0 113-3 3 3 0 01-3 3zm22 12a3 3 0 113-3 3 3 0 01-3 3z"}})])
          )
        }
      }
    