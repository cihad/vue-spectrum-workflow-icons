
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
            children.concat([_c('path',{attrs:{"d":"M6 6a6 6 0 000 12h6V6zm7.079 28h-2.908a1.5 1.5 0 01-1.455-1.136L6 20h6l2.534 12.136A1.5 1.5 0 0113.079 34zM32.5 23.957S25.974 18 17.425 18H14V6h3.425C25.845 6 32.5.043 32.5.043A1.268 1.268 0 0134 1.426v21.148a1.268 1.268 0 01-1.5 1.383z"}})])
          )
        }
      }
    