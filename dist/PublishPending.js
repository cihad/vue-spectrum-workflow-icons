
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
            children.concat([_c('path',{attrs:{"d":"M33.191 1.113L1.8 10.478a.5.5 0 00-.08.926l7.92 3.954zM15.645 22.372L10.08 19.25v7.639a.713.713 0 001.174.544l3.795-3.2a12.239 12.239 0 01.596-1.861zM27 14.8a12.288 12.288 0 012.786.329l5.851-12.765-22.548 14.667 4.435 2.229A12.273 12.273 0 0127 14.8zm-1 11.817l-3.132 3.132 1.415 1.414L28 27.446v-7.123h-2v6.294zm7.717 1.683a6.96 6.96 0 01-1.041 2.536l1.437 1.437a8.929 8.929 0 001.632-3.973zm2.035-2.6a8.835 8.835 0 00-1.6-3.916L32.713 23.2a6.863 6.863 0 011.014 2.5z"}}),_c('path',{attrs:{"d":"M30.849 32.687A6.772 6.772 0 0127 33.9a6.876 6.876 0 01-1.2-13.651v-2.007A8.867 8.867 0 0027 35.9a8.733 8.733 0 005.271-1.791zM28.2 18.238v2.018a6.887 6.887 0 012.69 1.093l1.434-1.411a8.834 8.834 0 00-4.124-1.7z"}})])
          )
        }
      }
    