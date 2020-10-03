
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
            children.concat([_c('path',{attrs:{"d":"M32.728 3.272a6 6 0 00-8.485 0l-6.456 6.456L3.272 24.243a6 6 0 008.485 8.485l5.943-5.947 15.028-15.024a6 6 0 000-8.485zM19 11a2 2 0 11-2 2 2 2 0 012-2zm-6 10a2 2 0 112-2 2 2 0 01-2 2zm4 4a2 2 0 112-2 2 2 0 01-2 2zm6-6a2 2 0 112-2 2 2 0 01-2 2z"}})])
          )
        }
      }
    