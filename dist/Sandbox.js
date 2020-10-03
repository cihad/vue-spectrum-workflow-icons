
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"36","height":"36"}, attrs),
              ...rest,
            },
            children.concat([_c('rect',{attrs:{"x":"2","y":"2","width":"14","height":"30","rx":"1"}}),_c('path',{attrs:{"d":"M24 2h2v2h-2z"}}),_c('path',{attrs:{"d":"M24 2h2v2h-2zm4 0h2v2h-2z"}}),_c('path',{attrs:{"d":"M28 2h2v2h-2zm6 2V3a1 1 0 00-1-1h-1v2z"}}),_c('path',{attrs:{"d":"M34 4V3a1 1 0 00-1-1h-1v2zM22 4V2h-1a1 1 0 00-1 1v1zm-2 2h2v2h-2z"}}),_c('path',{attrs:{"d":"M20 6h2v2h-2zm0 4h2v2h-2z"}}),_c('path',{attrs:{"d":"M20 10h2v2h-2zm0 4h2v2h-2z"}}),_c('path',{attrs:{"d":"M20 14h2v2h-2zm0 4h2v2h-2z"}}),_c('path',{attrs:{"d":"M20 18h2v2h-2zm0 4h2v2h-2z"}}),_c('path',{attrs:{"d":"M20 22h2v2h-2zm0 4h2v2h-2z"}}),_c('path',{attrs:{"d":"M20 26h2v2h-2zm2 6v-2h-2v1a1 1 0 001 1z"}}),_c('path',{attrs:{"d":"M22 32v-2h-2v1a1 1 0 001 1zm2-2h2v2h-2z"}}),_c('path',{attrs:{"d":"M24 30h2v2h-2zm4 0h2v2h-2z"}}),_c('path',{attrs:{"d":"M28 30h2v2h-2zm4-24h2v2h-2z"}}),_c('path',{attrs:{"d":"M32 6h2v2h-2zm0 4h2v2h-2z"}}),_c('path',{attrs:{"d":"M32 10h2v2h-2zm0 4h2v2h-2z"}}),_c('path',{attrs:{"d":"M32 14h2v2h-2zM32 18h2v2h-2z"}}),_c('path',{attrs:{"d":"M32 18h2v2h-2zM32 22h2v2h-2z"}}),_c('path',{attrs:{"d":"M32 22h2v2h-2z"}}),_c('g',[_c('path',{attrs:{"d":"M32 26h2v2h-2z"}}),_c('path',{attrs:{"d":"M32 26h2v2h-2z"}})]),_c('g',[_c('path',{attrs:{"d":"M34 31v-1h-2v2h1a1 1 0 001-1z"}}),_c('path',{attrs:{"d":"M34 31v-1h-2v2h1a1 1 0 001-1z"}})])])
          )
        }
      }
    