
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
            children.concat([_c('path',{attrs:{"d":"M24 22h4V9a1 1 0 00-1-1H14v4h10z"}}),_c('path',{attrs:{"d":"M12 24V3a1 1 0 00-1-1H9a1 1 0 00-1 1v5H3a1 1 0 00-1 1v2a1 1 0 001 1h5v15a1 1 0 001 1h15v5a1 1 0 001 1h2a1 1 0 001-1v-5h5a1 1 0 001-1v-2a1 1 0 00-1-1z"}})])
          )
        }
      }
    