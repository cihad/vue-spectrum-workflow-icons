
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
            children.concat([_c('path',{attrs:{"d":"M34.875 2H1.125A1.147 1.147 0 000 3.167v25.666A1.147 1.147 0 001.125 30h14.784a11.411 11.411 0 01-.359-2H2v-2.392l11.165-8.358 3.635 2.725a1.967 1.967 0 00.852.344 11.485 11.485 0 017.222-4.619L34 8.835v9.055a11.561 11.561 0 012 1.963V3.167A1.147 1.147 0 0034.875 2zM2 23.107V8.881L11.5 16zm16-4.732L2 6.38V4h32v2.334z"}}),_c('path',{attrs:{"d":"M27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zM27 34a6.966 6.966 0 01-5.525-11.252l9.777 9.777A6.935 6.935 0 0127 34zm5.525-2.748l-9.777-9.777a6.966 6.966 0 019.777 9.777z"}})])
          )
        }
      }
    