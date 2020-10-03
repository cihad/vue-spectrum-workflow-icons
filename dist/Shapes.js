
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
            children.concat([_c('path',{attrs:{"d":"M22.521 31.8a11.307 11.307 0 01-11.052-9.024l-.032-.16h-9.7a.256.256 0 01-.224-.131.246.246 0 010-.256L11.736 4.33a.261.261 0 01.45 0l3.941 6.9.18-.12a11.279 11.279 0 116.214 20.69zm-9.085-8.934a9.38 9.38 0 103.789-10.09l-.153.1 5.342 9.349a.251.251 0 010 .256.257.257 0 01-.225.131h-8.818z"}})])
          )
        }
      }
    