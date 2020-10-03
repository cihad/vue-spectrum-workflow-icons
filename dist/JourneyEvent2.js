
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
            children.concat([_c('path',{attrs:{"d":"M27.1 18.1A8.9 8.9 0 1036 27a8.9 8.9 0 00-8.9-8.9zm0 16a7.1 7.1 0 01-1-14.121V27a1 1 0 00.293.707l3.022 3.023a.5.5 0 00.708 0l.707-.708a.5.5 0 000-.707l-2.73-2.729v-6.608a7.1 7.1 0 01-1 14.122z"}}),_c('path',{attrs:{"d":"M16 26c0 .114.024.222.034.334A10.924 10.924 0 0118 20.687V10a2 2 0 012-2h4.1a5 5 0 100-2H20a4 4 0 00-4 4v6h-4.1a5 5 0 100 2H16zM29 4a3 3 0 11-3 3 3 3 0 013-3zM7 20a3 3 0 113-3 3 3 0 01-3 3z"}})])
          )
        }
      }
    