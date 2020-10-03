
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
            children.concat([_c('path',{attrs:{"d":"M18 2A16.03 16.03 0 004.644 9.228L1 7.521a.69.69 0 00-.531-.027.7.7 0 00-.424.9L3.053 16.7a.5.5 0 00.589.276l8.311-3.008a.7.7 0 00.42-.9.686.686 0 00-.361-.39l-3.677-1.72a11.971 11.971 0 11-.161 13.917 2 2 0 00-3.274 2.3A16 16 0 1018 2z"}})])
          )
        }
      }
    