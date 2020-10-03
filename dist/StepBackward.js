
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
            children.concat([_c('rect',{attrs:{"height":"28","rx":"1","ry":"1","width":"8","x":"26","y":"4"}}),_c('path',{attrs:{"d":"M20 30.919V5.081a1 1 0 00-1.625-.781L2.226 17.219a1 1 0 000 1.562L18.375 31.7A1 1 0 0020 30.919z"}})])
          )
        }
      }
    