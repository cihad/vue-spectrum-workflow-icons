
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
            children.concat([_c('path',{attrs:{"d":"M27 18a9 9 0 109 9 9 9 0 00-9-9zm4.081 9.748l-5.927 6.778a.613.613 0 01-1.027-.642l2-4.749-2.827-1.214a1.059 1.059 0 01-.379-1.67l5.928-6.777a.613.613 0 011.026.642l-2 4.749 2.825 1.214a1.058 1.058 0 01.381 1.669z"}}),_c('path',{attrs:{"d":"M16 26c0 .114.024.222.034.334A10.924 10.924 0 0118 20.687V10a2 2 0 012-2h4.1a5 5 0 100-2H20a4 4 0 00-4 4v6h-4.1a5 5 0 100 2H16zM29 4a3 3 0 11-3 3 3 3 0 013-3zM7 20a3 3 0 113-3 3 3 0 01-3 3z"}})])
          )
        }
      }
    