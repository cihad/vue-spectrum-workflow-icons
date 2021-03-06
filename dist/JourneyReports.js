
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
            children.concat([_c('rect',{attrs:{"height":"18","rx":".5","width":"2","x":"34","y":"18"}}),_c('rect',{attrs:{"height":"12","rx":".5","width":"2","x":"30","y":"24"}}),_c('rect',{attrs:{"height":"8","rx":".5","width":"2","x":"26","y":"28"}}),_c('rect',{attrs:{"height":"6","rx":".5","width":"2","x":"22","y":"30"}}),_c('path',{attrs:{"d":"M20 28a2 2 0 01-2-2V10a2 2 0 012-2h4.1a5 5 0 100-2H20a4 4 0 00-4 4v6h-4.1a5 5 0 100 2H16v8a4 4 0 004 4zm9-24a3 3 0 11-3 3 3 3 0 013-3zM7 20a3 3 0 113-3 3 3 0 01-3 3z"}})])
          )
        }
      }
    