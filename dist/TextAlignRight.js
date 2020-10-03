
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
            children.concat([_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"24","x":"8","y":"28"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"30","x":"2","y":"4"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"24","x":"8","y":"12"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"30","x":"2","y":"20"}})])
          )
        }
      }
    