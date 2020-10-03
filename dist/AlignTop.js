
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
            children.concat([_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"36","y":"2"}}),_c('rect',{attrs:{"height":"26","rx":"1","ry":"1","width":"10","x":"6","y":"6"}}),_c('rect',{attrs:{"height":"16","rx":"1","ry":"1","width":"10","x":"20","y":"6"}})])
          )
        }
      }
    