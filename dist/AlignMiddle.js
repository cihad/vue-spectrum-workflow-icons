
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
            children.concat([_c('path',{attrs:{"d":"M35.5 16H30V9a1 1 0 00-1-1h-8a1 1 0 00-1 1v7h-4V5a1 1 0 00-1-1H7a1 1 0 00-1 1v11H.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H6v11a1 1 0 001 1h8a1 1 0 001-1V18h4v7a1 1 0 001 1h8a1 1 0 001-1v-7h5.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5z"}})])
          )
        }
      }
    