
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
            children.concat([_c('path',{attrs:{"d":"M31 4H21a1 1 0 00-1 1v5h4a2 2 0 012 2v4h5a1 1 0 001-1V5a1 1 0 00-1-1z"}}),_c('rect',{attrs:{"height":"12","rx":"1","ry":"1","width":"12","x":"4","y":"20"}}),_c('path',{attrs:{"d":"M23 12H13a1 1 0 00-1 1v5h4a2 2 0 012 2v4h5a1 1 0 001-1V13a1 1 0 00-1-1z"}})])
          )
        }
      }
    