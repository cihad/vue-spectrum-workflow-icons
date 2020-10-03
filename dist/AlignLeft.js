
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
            children.concat([_c('rect',{attrs:{"height":"36","rx":".5","ry":".5","width":"2","x":"2"}}),_c('rect',{attrs:{"height":"10","rx":"1","ry":"1","width":"26","x":"6","y":"20"}}),_c('rect',{attrs:{"height":"10","rx":"1","ry":"1","width":"16","x":"6","y":"6"}})])
          )
        }
      }
    