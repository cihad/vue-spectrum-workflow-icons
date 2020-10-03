
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
            children.concat([_c('path',{attrs:{"d":"M29 16h-9V7a1 1 0 00-1-1h-2a1 1 0 00-1 1v9H7a1 1 0 00-1 1v2a1 1 0 001 1h9v9a1 1 0 001 1h2a1 1 0 001-1v-9h9a1 1 0 001-1v-2a1 1 0 00-1-1z"}})])
          )
        }
      }
    