
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
            children.concat([_c('rect',{attrs:{"height":"4","rx":".5","ry":".5","width":"4","y":"8"}}),_c('rect',{attrs:{"height":"4","rx":".5","ry":".5","width":"8","y":"14"}}),_c('rect',{attrs:{"height":"4","rx":".5","ry":".5","width":"6","x":"28","y":"14"}}),_c('rect',{attrs:{"height":"4","rx":".5","ry":".5","width":"8","x":"26","y":"20"}}),_c('rect',{attrs:{"height":"4","rx":".5","ry":".5","width":"6","y":"20"}}),_c('rect',{attrs:{"height":"4","rx":".5","ry":".5","width":"16","x":"8","y":"20"}}),_c('rect',{attrs:{"height":"4","rx":".5","ry":".5","width":"4","x":"6","y":"8"}}),_c('rect',{attrs:{"height":"4","rx":".5","ry":".5","width":"4","x":"12","y":"8"}}),_c('rect',{attrs:{"height":"4","rx":".5","ry":".5","width":"4","x":"18","y":"8"}}),_c('rect',{attrs:{"height":"4","rx":".5","ry":".5","width":"4","x":"10","y":"14"}}),_c('rect',{attrs:{"height":"4","rx":".5","ry":".5","width":"4","x":"16","y":"14"}}),_c('rect',{attrs:{"height":"4","rx":".5","ry":".5","width":"4","x":"22","y":"14"}}),_c('rect',{attrs:{"height":"4","rx":".5","ry":".5","width":"4","x":"24","y":"8"}}),_c('rect',{attrs:{"height":"4","rx":".5","ry":".5","width":"4","x":"30","y":"8"}})])
          )
        }
      }
    