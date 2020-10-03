
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
            children.concat([_c('path',{attrs:{"d":"M33 2H3a1 1 0 00-1 1v30a1 1 0 001 1h30a1 1 0 001-1V3a1 1 0 00-1-1zM4 4h8v8H4zm0 10h8v8H4zm0 18v-8h8v8zm10 0v-8h8v8zm18 0h-8v-8h8z"}})])
          )
        }
      }
    