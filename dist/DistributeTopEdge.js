
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
            children.concat([_c('path',{attrs:{"d":"M0 22.5v1a.5.5 0 00.5.5H6v7a1 1 0 001 1h22a1 1 0 001-1v-7h5.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H.5a.5.5 0 00-.5.5zm0-18v1a.5.5 0 00.5.5H10v7a1 1 0 001 1h14a1 1 0 001-1V6h9.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H.5a.5.5 0 00-.5.5z"}})])
          )
        }
      }
    