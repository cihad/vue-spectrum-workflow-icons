
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
            children.concat([_c('path',{attrs:{"d":"M29 16h-1v-2a10 10 0 00-20 0v2H7a1 1 0 00-1 1v16a1 1 0 001 1h22a1 1 0 001-1V17a1 1 0 00-1-1zm-17-2a6 6 0 0112 0v2H12zm8 12.222V29a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2.778a3 3 0 114 0z"}})])
          )
        }
      }
    