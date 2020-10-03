
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
            children.concat([_c('path',{attrs:{"d":"M33.5 30h-3a.5.5 0 00-.5.5v-4a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v-6a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v-8a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V6.519A.519.519 0 0017.481 6h-2.962a.519.519 0 00-.519.519V10.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v10a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v8a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V34h32v-3.5a.5.5 0 00-.5-.5z"}})])
          )
        }
      }
    