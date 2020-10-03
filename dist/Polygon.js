
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
            children.concat([_c('path',{attrs:{"d":"M34.61 17.53L26.942 4.565A1.077 1.077 0 0026 4H10.046a1.077 1.077 0 00-.946.561l-7.708 12.9a1.079 1.079 0 000 1.03L9.1 31.438a1.079 1.079 0 00.946.562H26a1.078 1.078 0 00.947-.563l7.666-12.881a1.079 1.079 0 00-.003-1.026zM25.447 30H10.6L3.388 17.98 10.593 6h14.851l7.169 12.04z"}})])
          )
        }
      }
    