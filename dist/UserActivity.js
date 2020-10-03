
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
            children.concat([_c('path',{attrs:{"d":"M20 2h.086a1 1 0 01.707.293l8.914 8.914a1 1 0 01.293.707V12H20z"}}),_c('path',{attrs:{"d":"M19 14a1 1 0 01-1-1V2H7a1 1 0 00-1 1v30a1 1 0 001 1h22a1 1 0 001-1V14zm6.986 18h-15.96c-.01-.121-.026-.6-.026-.727 0-1.105.7-3.908 5.173-4.265a.723.723 0 00.668-.707v-1.016a.673.673 0 00-.2-.455 6.345 6.345 0 01-1.841-3.58 4.359 4.359 0 014.185-4.45 4.347 4.347 0 014.215 4.45 6.358 6.358 0 01-1.853 3.58.678.678 0 00-.2.455v1.021a.726.726 0 00.666.706c4.393.409 5.183 3.2 5.183 4.261.004.127-.01.727-.01.727z"}})])
          )
        }
      }
    