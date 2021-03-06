
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"36","height":"36"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M33.291 17.288l-.792-.79-3.46-8.074A4 4 0 0025.362 6H10.638A4 4 0 006.96 8.424L3.5 16.5l-.793.793A2.412 2.412 0 002 19v14a1 1 0 001 1h2a1 1 0 001-1v-5h24v5a1 1 0 001 1h2a1 1 0 001-1V18.996a2.412 2.412 0 00-.709-1.708zM9.26 9.41a1.498 1.498 0 011.379-.909h14.724a1.498 1.498 0 011.38.91L29.565 16H6.434zM8 25a3 3 0 113-3 3 3 0 01-3 3zm20 0a3 3 0 113-3 3 3 0 01-3 3z"}})])
          )
        }
      }
    