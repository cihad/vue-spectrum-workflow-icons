
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
            children.concat([_c('path',{attrs:{"d":"M18 12a6 6 0 106 6 6.007 6.007 0 00-6-6z"}}),_c('path',{attrs:{"d":"M33 8h-6.05L23.6 4.326A1 1 0 0022.859 4h-9.718a1 1 0 00-.739.326L9.05 8H3a1 1 0 00-1 1v20a1 1 0 001 1h30a1 1 0 001-1V9a1 1 0 00-1-1zM18 26.2a8.2 8.2 0 118.2-8.2 8.2 8.2 0 01-8.2 8.2z"}})])
          )
        }
      }
    