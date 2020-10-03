
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
            children.concat([_c('path',{attrs:{"d":"M23 2v3h3v26h-3v3h6a1 1 0 001-1V3a1 1 0 00-1-1zM6 3v30a1 1 0 001 1h6v-3h-3V5h3V2H7a1 1 0 00-1 1z"}})])
          )
        }
      }
    