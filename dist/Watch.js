
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
            children.concat([_c('path',{attrs:{"d":"M8 6a1.914 1.914 0 00-2 2v20a2.02 2.02 0 002 2 2.112 2.112 0 012 2v3a1 1 0 001 1h14a1 1 0 001-1v-3a2.112 2.112 0 012-2 2.021 2.021 0 002-2V16h1a1 1 0 001-1v-2a1 1 0 00-1-1h-1V8a1.987 1.987 0 00-2.083-2A1.947 1.947 0 0126 4V1a1 1 0 00-1-1H11a1 1 0 00-1 1v3a1.875 1.875 0 01-2 2zm18 4v16H10V10z"}})])
          )
        }
      }
    