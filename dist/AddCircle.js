
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
            children.concat([_c('path',{attrs:{"d":"M18 2a16 16 0 1016 16A16 16 0 0018 2zm10 17a1 1 0 01-1 1h-7v7a1 1 0 01-1 1h-2a1 1 0 01-1-1v-7H9a1 1 0 01-1-1v-2a1 1 0 011-1h7V9a1 1 0 011-1h2a1 1 0 011 1v7h7a1 1 0 011 1z"}})])
          )
        }
      }
    