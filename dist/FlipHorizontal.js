
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
            children.concat([_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"16","y":"2"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"16","y":"6"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"16","y":"10"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"16","y":"14"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"16","y":"18"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"16","y":"22"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"16","y":"26"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"2","x":"16","y":"30"}}),_c('path',{attrs:{"d":"M30.276 28.7L20.2 17.8a1.01 1.01 0 010-1.428L30.276 5.3A1.01 1.01 0 0132 6.012v21.976a1.01 1.01 0 01-1.724.712zM3.845 8.079l8.168 8.843L3.845 25.9zM3.044 5a1.009 1.009 0 00-1.017 1.012v21.976A1.009 1.009 0 003.045 29a.987.987 0 00.706-.3l10.072-11.067a1.01 1.01 0 000-1.428L3.751 5.3a.989.989 0 00-.707-.3z"}})])
          )
        }
      }
    