
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"36","height":"36"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M22 8v17.914l-3.58-3.5-1.4-1.364-1.4 1.36L12 25.944V8h10m1-2H11a1 1 0 00-1 1v22.506a.523.523 0 00.306.456.421.421 0 00.2.044.511.511 0 00.352-.148l6.174-6.01 6.122 5.988a.5.5 0 00.352.144.472.472 0 00.2-.038.5.5 0 00.294-.454V7a1 1 0 00-1-1z"}})])
          )
        }
      }
    