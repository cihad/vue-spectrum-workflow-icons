
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
            children.concat([_c('path',{attrs:{"d":"M10 4h6v2h-6zm10 0h6v2h-6zM3 4a1 1 0 00-1 1v3h2V6h2V4zm-1 8h2v4H2zm0 8h2v4H2zm2 10v-2H2v3a1 1 0 001 1h3v-2zm6 0h6v2h-6zm10 0h6v2h-6zM30 4v2h2v2h2V5a1 1 0 00-1-1zm2 8h2v4h-2zm0 8h2v4h-2zm0 8v2h-2v2h3a1 1 0 001-1v-3z"}})])
          )
        }
      }
    