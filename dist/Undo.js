
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
            children.concat([_c('path',{attrs:{"d":"M30.663 12.542A10.391 10.391 0 0023.671 10H11V4.8a.8.8 0 00-.8-.8.787.787 0 00-.527.2l-7.529 7.449a.5.5 0 000 .7L9.668 19.8a.787.787 0 00.527.2.8.8 0 00.8-.8V14h12.882a6.139 6.139 0 016.223 5.8A5.889 5.889 0 0124 26h-7a1 1 0 00-1 1v2a1 1 0 001 1h6.526a10.335 10.335 0 0010.426-9.013 9.947 9.947 0 00-3.289-8.445z"}})])
          )
        }
      }
    