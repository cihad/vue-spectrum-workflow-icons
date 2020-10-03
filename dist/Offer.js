
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
            children.concat([_c('path',{attrs:{"d":"M18.26 10.911l1.993 5.228 5.629.264a.233.233 0 01.136.415l-4.4 3.5 1.489 5.382a.235.235 0 01-.356.256l-4.711-3.063-4.711 3.068a.235.235 0 01-.356-.256l1.486-5.391-4.4-3.5a.233.233 0 01.141-.414l5.629-.264 1.993-5.228a.236.236 0 01.438.003zM2 28H0v2a2 2 0 002 2h4v-2H2zM6 4h4v2H6zm2 26h4v2H8zM0 10h2v4H0zm2-4h2V4H2a2 2 0 00-2 2v2h2zM0 16h2v4H0zm0 6h2v4H0zm34-12h2v4h-2zm0 6h2v4h-2zm0 6h2v4h-2zm-20 8h4v2h-4zM12 4h4v2h-4zm22 0h-4v2h4v2h2V6a2 2 0 00-2-2zM18 4h4v2h-4zm16 26h-2v2h2a2 2 0 002-2v-2h-2zm-8 0h4v2h-4zm-6 0h4v2h-4zm4-26h4v2h-4z"}})])
          )
        }
      }
    