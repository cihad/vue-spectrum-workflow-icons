
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
            children.concat([_c('path',{attrs:{"d":"M2 10h2v6H2zm2 12v-2H2v3.111a.889.889 0 00.889.889H6v-2zm20-10v-2h-2v3.111a.889.889 0 00.889.889H26v-2zM14 32v-2h-2v3.111a.889.889 0 00.889.889H16v-2zm6 0h6v2h-6zm12-12h2v6h-2zm0 10v2h-2v2h3a1 1 0 001-1v-3zM23.111 2H20v2h2v2h2V2.889A.889.889 0 0023.111 2zm10 10H30v2h2v2h2v-3.111a.889.889 0 00-.889-.889zm-20 10H10v2h2v2h2v-3.111a.889.889 0 00-.889-.889zM10 2h6v2h-6zM6 2H3a1 1 0 00-1 1v3h2V4h2z"}})])
          )
        }
      }
    