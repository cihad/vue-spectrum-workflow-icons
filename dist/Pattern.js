
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
            children.concat([_c('rect',{attrs:{"height":"4","rx":".5","ry":".5","width":"6","x":"2","y":"4"}}),_c('rect',{attrs:{"height":"8","rx":".5","ry":".5","width":"2","x":"10","y":"2"}}),_c('rect',{attrs:{"height":"4","rx":".5","ry":".5","width":"6","x":"14","y":"4"}}),_c('rect',{attrs:{"height":"4","rx":".5","ry":".5","width":"6","x":"26","y":"4"}}),_c('rect',{attrs:{"height":"8","rx":".5","ry":".5","width":"2","x":"22","y":"2"}}),_c('rect',{attrs:{"height":"4","rx":".5","ry":".5","width":"6","x":"2","y":"20"}}),_c('rect',{attrs:{"height":"8","rx":".5","ry":".5","width":"2","x":"10","y":"18"}}),_c('rect',{attrs:{"height":"4","rx":".5","ry":".5","width":"6","x":"14","y":"20"}}),_c('rect',{attrs:{"height":"4","rx":".5","ry":".5","width":"6","x":"26","y":"20"}}),_c('rect',{attrs:{"height":"8","rx":".5","ry":".5","width":"2","x":"22","y":"18"}}),_c('rect',{attrs:{"height":"8","rx":".5","ry":".5","width":"2","x":"4","y":"10"}}),_c('rect',{attrs:{"height":"4","rx":".5","ry":".5","width":"6","x":"8","y":"12"}}),_c('rect',{attrs:{"height":"4","rx":".5","ry":".5","width":"6","x":"20","y":"12"}}),_c('rect',{attrs:{"height":"8","rx":".5","ry":".5","width":"2","x":"16","y":"10"}}),_c('rect',{attrs:{"height":"8","rx":".5","ry":".5","width":"2","x":"28","y":"10"}}),_c('rect',{attrs:{"height":"8","rx":".5","ry":".5","width":"2","x":"4","y":"26"}}),_c('rect',{attrs:{"height":"4","rx":".5","ry":".5","width":"6","x":"8","y":"28"}}),_c('rect',{attrs:{"height":"4","rx":".5","ry":".5","width":"6","x":"20","y":"28"}}),_c('rect',{attrs:{"height":"8","rx":".5","ry":".5","width":"2","x":"16","y":"26"}}),_c('rect',{attrs:{"height":"8","rx":".5","ry":".5","width":"2","x":"28","y":"26"}})])
          )
        }
      }
    