
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
            children.concat([_c('path',{attrs:{"d":"M32 26v-3a1 1 0 00-1-1h-2a1 1 0 00-1 1v3h-3a1 1 0 00-1 1v2a1 1 0 001 1h3v3a1 1 0 001 1h2a1 1 0 001-1v-3h3a1 1 0 001-1v-2a1 1 0 00-1-1z"}}),_c('rect',{attrs:{"height":"22","rx":"1","ry":"1","width":"14","y":"8"}}),_c('path',{attrs:{"d":"M20 24a5.015 5.015 0 015-5h1a2 2 0 002-2v-5a2 2 0 00-2-2H16v18h2a2 2 0 002-2zM10 6V4a1 1 0 00-1-1H5a1 1 0 00-1 1v2z"}})])
          )
        }
      }
    