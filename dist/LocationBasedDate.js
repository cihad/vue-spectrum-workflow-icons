
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
            children.concat([_c('rect',{attrs:{"height":"8","rx":"1","ry":"1","width":"8","x":"22","y":"16"}}),_c('path',{attrs:{"d":"M35 4h-5V1a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H14V1a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H5a1 1 0 00-1 1v6.109a10.633 10.633 0 012-.809V6h4v1a1 1 0 001 1h2a1 1 0 001-1V6h12v1a1 1 0 001 1h2a1 1 0 001-1V6h4v22H17.143a49.728 49.728 0 01-1.17 2H35a1 1 0 001-1V5a1 1 0 00-1-1z"}}),_c('path',{attrs:{"d":"M9 12.367a8.25 8.25 0 00-8.25 8.25C.75 25.173 9 35.57 9 35.57s8.25-10.4 8.25-14.953A8.25 8.25 0 009 12.367zm0 11.75a3.5 3.5 0 113.5-3.5 3.5 3.5 0 01-3.5 3.5z"}})])
          )
        }
      }
    