
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
            children.concat([_c('rect',{attrs:{"height":"2","rx":".75","ry":".75","width":"2","x":"12","y":"4"}}),_c('rect',{attrs:{"height":"2","rx":".75","ry":".75","width":"2","x":"12","y":"10"}}),_c('rect',{attrs:{"height":"2","rx":".75","ry":".75","width":"2","x":"12","y":"16"}}),_c('rect',{attrs:{"height":"2","rx":".75","ry":".75","width":"2","x":"12","y":"22"}}),_c('rect',{attrs:{"height":"2","rx":".75","ry":".75","width":"2","x":"12","y":"28"}}),_c('rect',{attrs:{"height":"2","rx":".75","ry":".75","width":"2","x":"18","y":"4"}}),_c('rect',{attrs:{"height":"2","rx":".75","ry":".75","width":"2","x":"18","y":"10"}}),_c('rect',{attrs:{"height":"2","rx":".75","ry":".75","width":"2","x":"18","y":"16"}}),_c('rect',{attrs:{"height":"2","rx":".75","ry":".75","width":"2","x":"18","y":"22"}}),_c('rect',{attrs:{"height":"2","rx":".75","ry":".75","width":"2","x":"18","y":"28"}})])
          )
        }
      }
    