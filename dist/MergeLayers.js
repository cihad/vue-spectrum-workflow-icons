
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
            children.concat([_c('path',{attrs:{"d":"M32.62 23.319L24.479 18l8.134-5.315a.8.8 0 00.007-1.366L18.629 2.178a1.2 1.2 0 00-1.258 0l-13.99 9.141a.8.8 0 000 1.362L11.521 18l-8.14 5.319a.8.8 0 000 1.362l13.99 9.141a1.2 1.2 0 001.249.006l13.993-9.143a.8.8 0 00.007-1.366zm-8.856 2.047l-5.451 5.524a.5.5 0 01-.626 0l-5.451-5.524a.785.785 0 01-.236-.56.8.8 0 01.8-.806h3.7v-5.836L7.318 12 18 4.829 28.682 12 19.5 18.164V24h3.7a.8.8 0 01.8.806.785.785 0 01-.236.56z"}})])
          )
        }
      }
    