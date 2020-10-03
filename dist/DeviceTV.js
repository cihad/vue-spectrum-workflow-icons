
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
            children.concat([_c('path',{attrs:{"d":"M35 8H19.414l6.247-6.247a.971.971 0 000-1.411 1 1 0 00-1.416 0L18 6.586 11.776.362a.99.99 0 00-1.42-.006.971.971 0 00.006 1.42L16.586 8H1a1 1 0 00-1 1v24a1 1 0 001 1h34a1 1 0 001-1V9a1 1 0 00-1-1zm-5 22H4V12h26zm4-1a1 1 0 01-2 0v-2a1 1 0 012 0z"}})])
          )
        }
      }
    