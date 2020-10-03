
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
            children.concat([_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"24","x":"6","y":"4"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"24","x":"6","y":"8"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"24","x":"6","y":"12"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"24","x":"6","y":"16"}}),_c('path',{attrs:{"d":"M32 10v10h-5a1 1 0 00-1 1v2a1 1 0 01-1 1H11a1 1 0 01-1-1v-2a1 1 0 00-1-1H4V10H1a1 1 0 00-1 1v20a1 1 0 001 1h34a1 1 0 001-1V11a1 1 0 00-1-1z"}})])
          )
        }
      }
    