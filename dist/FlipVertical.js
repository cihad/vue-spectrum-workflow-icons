
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
            children.concat([_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"2","y":"16"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"6","y":"16"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"10","y":"16"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"14","y":"16"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"18","y":"16"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"22","y":"16"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"26","y":"16"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"30","y":"16"}}),_c('path',{attrs:{"d":"M5.3 30.249l10.9-10.072a1.01 1.01 0 011.428 0L28.7 30.249a1.01 1.01 0 01-.714 1.724H6.012a1.01 1.01 0 01-.712-1.724zM25.921 3.818l-8.843 8.168L8.1 3.818zM29 3.017A1.009 1.009 0 0027.988 2H6.012A1.009 1.009 0 005 3.018a.987.987 0 00.3.706L16.367 13.8a1.01 1.01 0 001.428 0L28.7 3.724a.989.989 0 00.3-.707z"}})])
          )
        }
      }
    