
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
            children.concat([_c('path',{attrs:{"d":"M20 2v10h10L20 2z"}}),_c('path',{attrs:{"d":"M19 14h11v19a1 1 0 01-1 1H7a1 1 0 01-1-1V3a1 1 0 011-1h11v11a1 1 0 001 1zm.5 10h-3a.5.5 0 00-.5.5v5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5zm-6 2h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zm12-6h-3a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5z"}})])
          )
        }
      }
    