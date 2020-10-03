
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
            children.concat([_c('path',{attrs:{"d":"M32 7V3a1 1 0 00-1-1H3a1 1 0 00-1 1v4a1 1 0 001 1h5v25a1 1 0 001 1h22a1 1 0 001-1v-2a1 1 0 00-1-1H12v-4h19a1 1 0 001-1v-2a1 1 0 00-1-1H12v-4h19a1 1 0 001-1v-2a1 1 0 00-1-1H12V8h19a1 1 0 001-1z"}})])
          )
        }
      }
    