
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
            children.concat([_c('path',{attrs:{"d":"M18 2a16.03 16.03 0 0113.356 7.228L35 7.521a.69.69 0 01.531-.027.7.7 0 01.424.9L32.947 16.7a.5.5 0 01-.589.276l-8.311-3.008a.7.7 0 01-.42-.9.686.686 0 01.361-.39l3.677-1.723a11.971 11.971 0 10.161 13.917 2 2 0 013.274 2.3A16 16 0 1118 2z"}})])
          )
        }
      }
    