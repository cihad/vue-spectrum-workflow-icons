
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
            children.concat([_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"32","y":"22"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"32","y":"18"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"32","y":"14"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"32","y":"10"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"32","y":"6"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"32","y":"2"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"28","y":"2"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"24","y":"2"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"20","y":"2"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"16","y":"2"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"12","y":"2"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"12","y":"6"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"12","y":"10"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"12","y":"14"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"12","y":"18"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"12","y":"22"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"16","y":"22"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"20","y":"22"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"24","y":"22"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"28","y":"22"}}),_c('path',{attrs:{"d":"M10 12H3a1 1 0 00-1 1v20a1 1 0 001 1h20a1 1 0 001-1v-7H11a1 1 0 01-1-1z"}})])
          )
        }
      }
    