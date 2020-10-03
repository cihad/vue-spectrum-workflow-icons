
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
            children.concat([_c('path',{attrs:{"d":"M33 6h-3V3a1 1 0 00-1-1H3a1 1 0 00-1 1v26a1 1 0 001 1h3v3a1 1 0 001 1h26a1 1 0 001-1V7a1 1 0 00-1-1zM4 28V4h24v2H7a1 1 0 00-1 1v21zm28 4H8V8h14v14l4-3 4 3V8h2z"}})])
          )
        }
      }
    