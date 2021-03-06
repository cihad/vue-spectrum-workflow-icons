
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
            children.concat([_c('path',{attrs:{"d":"M11.646 21.998l2.379 2.381L3.924 34.406 0 36l1.645-3.975 10.001-10.027zm12.305 4.322h.008L24 20.289 32.293 12l2.27-.023v-.009a1.446 1.446 0 001.01-2.47L31.041 4.96 26.5.483a1.446 1.446 0 00-2.469 1.011h-.008L24 3.708 15.707 12l-6.025.044v.007a1.429 1.429 0 00-1.106.414 1.446 1.446 0 000 2.047l6.459 6.458 6.457 6.459a1.442 1.442 0 002.463-1.108z"}})])
          )
        }
      }
    