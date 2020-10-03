
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
            children.concat([_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"22","x":"14","y":"4"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"22","x":"14","y":"16"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"22","x":"14","y":"28"}}),_c('rect',{attrs:{"height":"10","rx":".5","ry":".5","width":"2","x":"8"}}),_c('rect',{attrs:{"height":"10","rx":".5","ry":".5","width":"2","x":"10","y":"12"}}),_c('rect',{attrs:{"height":"10","rx":".5","ry":".5","width":"2","x":"6","y":"12"}}),_c('rect',{attrs:{"height":"10","rx":".5","ry":".5","width":"2","x":"10","y":"24"}}),_c('rect',{attrs:{"height":"10","rx":".5","ry":".5","width":"2","x":"6","y":"24"}}),_c('rect',{attrs:{"height":"10","rx":".5","ry":".5","width":"2","x":"2","y":"24"}})])
          )
        }
      }
    