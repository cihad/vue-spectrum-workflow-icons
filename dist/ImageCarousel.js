
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
            children.concat([_c('rect',{attrs:{"height":"22","rx":"1","ry":"1","width":"24","x":"6","y":"2"}}),_c('path',{attrs:{"d":"M4 22H1a1 1 0 01-1-1V7a1 1 0 011-1h3zm31 0h-3V6h3a1 1 0 011 1v14a1 1 0 01-1 1z"}}),_c('circle',{attrs:{"cx":"8","cy":"30","r":"1.4"}}),_c('circle',{attrs:{"cx":"14","cy":"30","r":"2.1"}}),_c('circle',{attrs:{"cx":"20","cy":"30","r":"1.4"}}),_c('circle',{attrs:{"cx":"26","cy":"30","r":"1.4"}})])
          )
        }
      }
    