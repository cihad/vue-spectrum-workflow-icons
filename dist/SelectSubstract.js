
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
            children.concat([_c('path',{attrs:{"d":"M30 14v-2h2v3.111a.889.889 0 01-.889.889H28v-2zM14 30v-2h2v3.111a.889.889 0 01-.889.889H12v-2zM4 20h2v5H4zm0-8h2v5H4zm2 18v-2H4v3.111a.889.889 0 00.889.889H9v-2zM31.111 4H27v2h3v3h2V4.888A.888.888 0 0031.111 4zM19 4h5.001v2H19zm-8 0h5.001v2H11zM8 4H5a1 1 0 00-1 1v4h2V6h2zm6 17h2v4h-2zm7-7h4.001v2H21zm-3 0h-3a1 1 0 00-1 1v3h2v-2h2z"}})])
          )
        }
      }
    