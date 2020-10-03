
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
            children.concat([_c('rect',{attrs:{"height":"8","rx":"1","ry":"1","width":"6","x":"2","y":"26"}}),_c('path',{attrs:{"d":"M16 33a1 1 0 01-1 1h-4a1 1 0 010-2h4a1 1 0 011 1zm8 0a1 1 0 01-1 1h-4a1 1 0 010-2h4a1 1 0 011 1zm8 0a1 1 0 01-1 1h-4a1 1 0 010-2h4a1 1 0 011 1z"}})])
          )
        }
      }
    