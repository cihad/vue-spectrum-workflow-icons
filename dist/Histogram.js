
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
            children.concat([_c('rect',{attrs:{"height":"10","rx":".5","ry":".5","width":"2","x":"2","y":"24"}}),_c('rect',{attrs:{"height":"18","rx":".5","ry":".5","width":"2","x":"6","y":"16"}}),_c('rect',{attrs:{"height":"18","rx":".5","ry":".5","width":"2","x":"18","y":"16"}}),_c('rect',{attrs:{"height":"14","rx":".5","ry":".5","width":"2","x":"26","y":"20"}}),_c('rect',{attrs:{"height":"6","rx":".5","ry":".5","width":"2","x":"30","y":"28"}}),_c('rect',{attrs:{"height":"28","rx":".5","ry":".5","width":"2","x":"10","y":"6"}}),_c('rect',{attrs:{"height":"22","rx":".5","ry":".5","width":"2","x":"14","y":"12"}}),_c('rect',{attrs:{"height":"24","rx":".5","ry":".5","width":"2","x":"22","y":"10"}})])
          )
        }
      }
    