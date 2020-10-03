
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
            children.concat([_c('path',{attrs:{"d":"M22 14v-3a1 1 0 00-1-1H11a1 1 0 00-1 1v10a1 1 0 001 1h3v-8z"}}),_c('path',{attrs:{"d":"M25 16h-9v9a1 1 0 001 1h8a1 1 0 001-1v-8a1 1 0 00-1-1z"}}),_c('path',{attrs:{"d":"M33 8a1 1 0 001-1V3a1 1 0 00-1-1h-4a1 1 0 00-1 1v1H8V3a1 1 0 00-1-1H3a1 1 0 00-1 1v4a1 1 0 001 1h1v20H3a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-1h20v1a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1h-1V8zm-3 20h-1a1 1 0 00-1 1v1H8v-1a1 1 0 00-1-1H6V8h1a1 1 0 001-1V6h20v1a1 1 0 001 1h1z"}})])
          )
        }
      }
    