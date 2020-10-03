
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
            children.concat([_c('path',{attrs:{"d":"M35 4H1a1 1 0 00-1 1v26a1 1 0 001 1h34a1 1 0 001-1V5a1 1 0 00-1-1zm-1 26H2v-6h9.663a3.477 3.477 0 006.674 0h1.326a3.477 3.477 0 006.674 0H34zm0-8h-7.663a3.477 3.477 0 00-6.674 0h-1.326a3.477 3.477 0 00-6.674 0H2v-8h1.663a3.477 3.477 0 006.674 0h1.326a3.477 3.477 0 006.674 0h7.326a3.477 3.477 0 006.674 0H34zm0-10h-1.663a3.477 3.477 0 00-6.674 0h-7.326a3.477 3.477 0 00-6.674 0h-1.326a3.477 3.477 0 00-6.674 0H2V6h32z"}})])
          )
        }
      }
    