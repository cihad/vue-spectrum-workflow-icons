
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
            children.concat([_c('path',{attrs:{"d":"M31 11.3a6.461 6.461 0 00-2.151-.118 8.345 8.345 0 000-4.407 8.024 8.024 0 00-5.71-5.648 8.162 8.162 0 00-10.215 6.821 6.97 6.97 0 00-3.361-.055 6.849 6.849 0 00-5.124 5.212 6.972 6.972 0 00.078 3.237 3.862 3.862 0 00-4.464 4.449A4 4 0 004.064 24H16v-9a1 1 0 011-1h2a1 1 0 011 1v9h9.572A6.429 6.429 0 0031 11.3z"}}),_c('path',{attrs:{"d":"M16 28h-4.3a.7.7 0 00-.7.7.685.685 0 00.207.49l6.468 6.145a.5.5 0 00.65 0l6.469-6.135a.688.688 0 00.206-.49.7.7 0 00-.7-.7H20V24h-4z"}})])
          )
        }
      }
    