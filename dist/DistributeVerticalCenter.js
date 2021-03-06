
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
            children.concat([_c('path',{attrs:{"d":"M6 23v3H.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H6v3a1 1 0 001 1h22a1 1 0 001-1v-3h5.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H30v-3a1 1 0 00-1-1H7a1 1 0 00-1 1zm4-18v3H.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H10v3a1 1 0 001 1h14a1 1 0 001-1v-3h9.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H26V5a1 1 0 00-1-1H11a1 1 0 00-1 1z"}})])
          )
        }
      }
    