
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
            children.concat([_c('path',{attrs:{"d":"M29 2H19a1 1 0 00-1 1v5h4a2 2 0 012 2v4h5a1 1 0 001-1V3a1 1 0 00-1-1z"}}),_c('rect',{attrs:{"height":"12","rx":"1","ry":"1","width":"12","x":"2","y":"18"}}),_c('path',{attrs:{"d":"M16 18v3.492a12.351 12.351 0 016-5.733V11a1 1 0 00-1-1H11a1 1 0 00-1 1v5h4a2 2 0 012 2zm11.1.2a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm5 9.4a.5.5 0 01-.5.5h-3.5v3.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-3.5h-3.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h3.5v-3.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v3.5h3.5a.5.5 0 01.5.5z"}})])
          )
        }
      }
    