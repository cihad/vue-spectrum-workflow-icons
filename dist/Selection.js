
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
            children.concat([_c('path',{attrs:{"d":"M4 20h2v5H4zm0-8h2v5H4zm2 18v-2H4v3.111a.889.889 0 00.89.889H9v-2zm6 0h5v2h-5zm8 0h5v2h-5zm10-19h2v5h-2zm0 8h2v5h-2zm0 8v3h-2v2h3a1 1 0 001-1v-4zm1.112-23H27v2h3v2h2V4.889A.889.889 0 0031.112 4zM19 4h5.001v2H19zm-8 0h5.001v2H11zM8 4H5a1 1 0 00-1 1v4h2V6h2z"}})])
          )
        }
      }
    