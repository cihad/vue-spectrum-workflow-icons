
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
            children.concat([_c('path',{attrs:{"d":"M12 21v-6a1 1 0 011-1h13V5a1 1 0 00-1-1H1a1 1 0 00-1 1v26a1 1 0 001 1h24a1 1 0 001-1v-9H13a1 1 0 01-1-1z"}}),_c('path',{attrs:{"d":"M28 11.207V16H14.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5H28v4.793a.5.5 0 00.854.353L35.913 18l-7.059-7.146a.5.5 0 00-.854.353z"}})])
          )
        }
      }
    