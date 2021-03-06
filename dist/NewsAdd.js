
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
            children.concat([_c('path',{attrs:{"d":"M20 12h10v2H20z"}}),_c('path',{attrs:{"d":"M14.75 28H6V8h26v7.769a12.265 12.265 0 012 1.124V7a1 1 0 00-1-1H5a1 1 0 00-1 1v20a1 1 0 01-2 0V10.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V27a3 3 0 003 3h12.084a12.259 12.259 0 01-.334-2z"}}),_c('path',{attrs:{"d":"M21.52 16H20v.893A12.225 12.225 0 0121.52 16zM18 18.635V12H8v10h7.769A12.3 12.3 0 0118 18.635zM15.084 24H8v2h6.75a12.259 12.259 0 01.334-2zM27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm5 9.4a.5.5 0 01-.5.5H28v3.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V28h-3.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H26v-3.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V26h3.5a.5.5 0 01.5.5z"}})])
          )
        }
      }
    