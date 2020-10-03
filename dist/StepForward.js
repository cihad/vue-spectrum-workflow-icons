
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
            children.concat([_c('rect',{attrs:{"height":"28","rx":"1","ry":"1","width":"8","x":"2","y":"4"}}),_c('path',{attrs:{"d":"M16 30.919V5.081a1 1 0 011.625-.781l16.149 12.919a1 1 0 010 1.562L17.625 31.7A1 1 0 0116 30.919z"}})])
          )
        }
      }
    