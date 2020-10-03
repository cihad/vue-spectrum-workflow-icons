
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
            children.concat([_c('path',{attrs:{"d":"M16 33a1 1 0 001 1h2a1 1 0 001-1v-9h-4zm13.572-21.857a6.449 6.449 0 00-.726.041 8.144 8.144 0 10-15.922-3.236 6.862 6.862 0 00-8.407 8.394A3.857 3.857 0 103.857 24H16v-6h-4.3a.7.7 0 01-.7-.7.685.685 0 01.207-.49l6.468-5.685a.5.5 0 01.65 0l6.468 5.685a.685.685 0 01.207.49.7.7 0 01-.7.7H20v6h9.572a6.429 6.429 0 000-12.857z"}})])
          )
        }
      }
    