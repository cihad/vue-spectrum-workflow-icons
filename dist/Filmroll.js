
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
            children.concat([_c('rect',{attrs:{"height":"22","rx":"1","ry":"1","width":"14","x":"4","y":"8"}}),_c('path',{attrs:{"d":"M26 24a5.015 5.015 0 015-5h1a2 2 0 002-2v-5a2 2 0 00-2-2H20v18h3a3 3 0 003-3zM14 6V4a1 1 0 00-1-1H9a1 1 0 00-1 1v2z"}})])
          )
        }
      }
    