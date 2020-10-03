
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
            children.concat([_c('path',{attrs:{"d":"M34 4H2a2 2 0 00-2 2v24a2 2 0 002 2h32a2 2 0 002-2V6a2 2 0 00-2-2zm-4 24H4V8h26zm3-7.5a2.5 2.5 0 112.5-2.5 2.5 2.5 0 01-2.5 2.5z"}}),_c('path',{attrs:{"d":"M7.019 25.686a1.249 1.249 0 01-.707-.383 1.13 1.13 0 01.094-1.647l4.252-3.668a.631.631 0 01.854.041l2.357 2.4 4.667-7.27a.625.625 0 011.055.035l2.147 3.712 3.95-8.015a1.233 1.233 0 011.638-.5 1.159 1.159 0 01.545 1.575l-5.507 10.923a.623.623 0 01-1.083.016l-2.291-3.959-4.276 6.661a.625.625 0 01-.963.085l-2.786-2.837-2.93 2.565a1.246 1.246 0 01-1.016.266z"}})])
          )
        }
      }
    