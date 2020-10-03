
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
            children.concat([_c('path',{attrs:{"d":"M2 8.5v3a.5.5 0 00.5.5H8V8H2.5a.5.5 0 00-.5.5zM29.5 8H16v4h13.5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zM14 16H2.378a.378.378 0 00-.378.378v3.244a.378.378 0 00.378.378H14zM2 24.5v3a.5.5 0 00.5.5H20v-4H2.5a.5.5 0 00-.5.5zm31.5-.5H28v4h5.5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5z"}}),_c('rect',{attrs:{"height":"8","rx":"1","ry":"1","width":"4","x":"10","y":"6"}}),_c('rect',{attrs:{"height":"8","rx":"1","ry":"1","width":"4","x":"16","y":"14"}}),_c('rect',{attrs:{"height":"8","rx":"1","ry":"1","width":"4","x":"22","y":"22"}})])
          )
        }
      }
    