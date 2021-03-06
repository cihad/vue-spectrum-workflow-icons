
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
            children.concat([_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"8"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"18","x":"6","y":"6"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"8","x":"10","y":"12"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"6","x":"14","y":"18"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"16","x":"14","y":"24"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"18","x":"18","y":"30"}})])
          )
        }
      }
    