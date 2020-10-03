
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
            children.concat([_c('path',{attrs:{"d":"M29 20H18v-4h7a1 1 0 001-1V7a1 1 0 00-1-1h-7V.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V6H9a1 1 0 00-1 1v8a1 1 0 001 1h7v4H5a1 1 0 00-1 1v8a1 1 0 001 1h11v5.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V30h11a1 1 0 001-1v-8a1 1 0 00-1-1z"}})])
          )
        }
      }
    