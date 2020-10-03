
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
            children.concat([_c('path',{attrs:{"d":"M5.646 28l2.379 2.381-3.74 3.669a.5.5 0 01-.713-.01l-1.59-1.66a.5.5 0 01.008-.7zm12.305 4.32h.008L18 26.289 26.293 18l2.27-.023.005-.009a1.446 1.446 0 001.01-2.47l-4.537-4.538L20.5 6.424a1.446 1.446 0 00-2.469 1.011h-.008L18 9.708 9.707 18l-6.025.044v.007a1.429 1.429 0 00-1.106.414 1.446 1.446 0 000 2.047l6.459 6.458 6.457 6.459a1.442 1.442 0 002.463-1.108z"}})])
          )
        }
      }
    