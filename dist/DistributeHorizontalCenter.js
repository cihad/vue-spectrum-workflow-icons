
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
            children.concat([_c('path',{attrs:{"d":"M13 6h-3V.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V6H5a1 1 0 00-1 1v22a1 1 0 001 1h3v5.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V30h3a1 1 0 001-1V7a1 1 0 00-1-1zm18 4h-3V.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V10h-3a1 1 0 00-1 1v14a1 1 0 001 1h3v9.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V26h3a1 1 0 001-1V11a1 1 0 00-1-1z"}})])
          )
        }
      }
    