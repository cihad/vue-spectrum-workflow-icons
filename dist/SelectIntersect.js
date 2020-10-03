
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
            children.concat([_c('path',{attrs:{"d":"M2 10h2v6H2zm2 12v-2H2v3.111a.889.889 0 00.889.889H8v-2zm10 10v-4h-2v5.111a.889.889 0 00.889.889H16v-2zm6 0h6v2h-6zm12-12h2v6h-2zm0 10v2h-2v2h3a1 1 0 001-1v-3zM23.111 2H20v2h2v4h2V2.889A.889.889 0 0023.111 2zm10 10H28v2h4v2h2v-3.111a.889.889 0 00-.889-.889zM10 2h6v2h-6zM6 2H3a1 1 0 00-1 1v3h2V4h2zm6 10h2.25v2.263H12zm4.84 0h2.25v2.263h-2.25zm4.899.01h2.25v2.263h-2.25zM12 16.824h2.25v2.263H12zm4.84 0h2.25v2.263h-2.25zm0 4.683h2.25v2.263h-2.25zm4.899-4.673h2.25v2.263h-2.25zm-9.729 4.903h2.25V24h-2.25zm9.739-.23h2.25v2.263h-2.25z"}})])
          )
        }
      }
    