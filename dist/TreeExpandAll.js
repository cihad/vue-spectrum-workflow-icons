
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
            children.concat([_c('path',{attrs:{"d":"M9 8h17V3a1 1 0 00-1-1H3a1 1 0 00-1 1v22a1 1 0 001 1h5V9a1 1 0 011-1z"}}),_c('path',{attrs:{"d":"M10 11v22a1 1 0 001 1h22a1 1 0 001-1V11a1 1 0 00-1-1H11a1 1 0 00-1 1zm19.5 13H24v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V24h-5.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H20v-5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V20h5.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5z"}})])
          )
        }
      }
    