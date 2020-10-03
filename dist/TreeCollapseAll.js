
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
            children.concat([_c('path',{attrs:{"d":"M9 8h17V3a1 1 0 00-1-1H3a1 1 0 00-1 1v22a1 1 0 001 1h5V9a1 1 0 011-1z"}}),_c('path',{attrs:{"d":"M10 11v22a1 1 0 001 1h22a1 1 0 001-1V11a1 1 0 00-1-1H11a1 1 0 00-1 1zm4.5 13a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h15a.5.5 0 01.5.5v3a.5.5 0 01-.5.5z"}})])
          )
        }
      }
    