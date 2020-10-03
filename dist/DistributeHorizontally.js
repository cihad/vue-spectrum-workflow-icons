
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
            children.concat([_c('rect',{attrs:{"height":"24","rx":"1","ry":"1","width":"12","x":"12","y":"6"}}),_c('rect',{attrs:{"height":"36","rx":".5","ry":".5","width":"2","x":"4"}}),_c('rect',{attrs:{"height":"36","rx":".5","ry":".5","width":"2","x":"30"}})])
          )
        }
      }
    