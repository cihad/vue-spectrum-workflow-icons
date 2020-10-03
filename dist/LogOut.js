
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
            children.concat([_c('rect',{attrs:{"height":"18","rx":"1","ry":"1","width":"4","x":"16"}}),_c('path',{attrs:{"d":"M25.215 5.063l-1.14 1.823a1.01 1.01 0 00.337 1.384 11.738 11.738 0 11-12.82 0 1 1 0 00.336-1.377l-1.144-1.831A1 1 0 009.4 4.731a15.9 15.9 0 1017.191 0 1 1 0 00-1.376.332z"}})])
          )
        }
      }
    