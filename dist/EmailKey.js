
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
            children.concat([_c('path',{attrs:{"d":"M11.165 17.938L0 9.511v16.684l11.165-8.257zm24.28 17.595v-2.887h-3.763v-1.084h3.763v-2.237a.467.467 0 00-.467-.467h-3.3v-5.927a5.546 5.546 0 002.283-1.359 5.607 5.607 0 10-7.93 0 5.542 5.542 0 002.313 1.367v12.126a.935.935 0 00.935.935h5.695a.467.467 0 00.471-.467zm-4.123-17.462a1.869 1.869 0 110-2.643 1.869 1.869 0 010 2.643z"}}),_c('path',{attrs:{"d":"M22.178 19.921l-2.888 2.173a2.171 2.171 0 01-2.58 0l-3.628-2.719L0 29.068v1.765A1.147 1.147 0 001.125 32h24.822v-7.3a8.153 8.153 0 01-3.769-4.779z"}}),_c('path',{attrs:{"d":"M30 9.423a8.135 8.135 0 011.974.267L36 6.665v-1.5A1.147 1.147 0 0034.875 4H1.125A1.147 1.147 0 000 5.167v1.468l18 13.553 3.839-2.888A8.176 8.176 0 0130 9.423z"}})])
          )
        }
      }
    