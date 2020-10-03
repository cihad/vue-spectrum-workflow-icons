
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
            children.concat([_c('path',{attrs:{"d":"M35 6h-5V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H12V3a1 1 0 00-1-1H9a1 1 0 00-1 1v3H3a1 1 0 00-1 1v26a1 1 0 001 1h32a1 1 0 001-1V7a1 1 0 00-1-1zm-1 26H4V8h4v1a1 1 0 001 1h2a1 1 0 001-1V8h14v1a1 1 0 001 1h2a1 1 0 001-1V8h4z"}}),_c('rect',{attrs:{"height":"8","rx":"1","ry":"1","width":"8","x":"22","y":"20"}})])
          )
        }
      }
    