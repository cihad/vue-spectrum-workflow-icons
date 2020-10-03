
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
            children.concat([_c('rect',{attrs:{"height":"6","rx":"1","ry":"1","width":"6","x":"2","y":"2"}}),_c('rect',{attrs:{"height":"6","rx":"1","ry":"1","width":"6","x":"14","y":"2"}}),_c('rect',{attrs:{"height":"6","rx":"1","ry":"1","width":"6","x":"26","y":"2"}}),_c('rect',{attrs:{"height":"6","rx":"1","ry":"1","width":"6","x":"2","y":"14"}}),_c('rect',{attrs:{"height":"6","rx":"1","ry":"1","width":"6","x":"14","y":"14"}}),_c('rect',{attrs:{"height":"6","rx":"1","ry":"1","width":"6","x":"26","y":"14"}}),_c('rect',{attrs:{"height":"6","rx":"1","ry":"1","width":"6","x":"2","y":"26"}}),_c('rect',{attrs:{"height":"6","rx":"1","ry":"1","width":"6","x":"14","y":"26"}}),_c('rect',{attrs:{"height":"6","rx":"1","ry":"1","width":"6","x":"26","y":"26"}})])
          )
        }
      }
    