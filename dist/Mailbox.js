
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
            children.concat([_c('path',{attrs:{"d":"M5 8a5 5 0 00-5 5v16a1 1 0 001 1h11V13a5 5 0 00-5-5zm26 0H18v7a1 1 0 01-1 1h-3v14h21a1 1 0 001-1V13a5 5 0 00-5-5z"}}),_c('path',{attrs:{"d":"M21 0h-6a1 1 0 00-1 1v13h2V6h5a1 1 0 001-1V1a1 1 0 00-1-1z"}})])
          )
        }
      }
    