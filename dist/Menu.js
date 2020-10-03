
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
            children.concat([_c('path',{attrs:{"d":"M33 2H3a1 1 0 00-1 1v30a1 1 0 001 1h30a1 1 0 001-1V3a1 1 0 00-1-1zm-5.394 13.707L18 25.314l-9.606-9.607A1 1 0 019.1 14h17.8a1 1 0 01.706 1.707z"}})])
          )
        }
      }
    