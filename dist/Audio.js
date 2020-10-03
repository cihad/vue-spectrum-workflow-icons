
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
            children.concat([_c('path',{attrs:{"d":"M30 3.417a1 1 0 00-1.268-.965l-16 4.447a1 1 0 00-.732.964v16.55a6.628 6.628 0 00-6.144.057c-3.113 1.515-4.687 4.7-3.515 7.1s4.646 3.136 7.759 1.62a6.434 6.434 0 003.9-5.333V12.824l14-4v11.589a6.628 6.628 0 00-6.144.057c-3.113 1.515-4.687 4.7-3.515 7.1s4.646 3.132 7.759 1.616a6.427 6.427 0 003.9-5.353V3.417z"}})])
          )
        }
      }
    