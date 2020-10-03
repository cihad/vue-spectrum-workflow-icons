
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
            children.concat([_c('path',{attrs:{"d":"M13.5 0h-1a.5.5 0 00-.5.5V6H5a1 1 0 00-1 1v22a1 1 0 001 1h7v5.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V.5a.5.5 0 00-.5-.5zm18 0h-1a.5.5 0 00-.5.5V10h-7a1 1 0 00-1 1v14a1 1 0 001 1h7v9.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V.5a.5.5 0 00-.5-.5z"}})])
          )
        }
      }
    