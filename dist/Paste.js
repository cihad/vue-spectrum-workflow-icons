
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
            children.concat([_c('path',{attrs:{"d":"M28 6v5a1 1 0 01-1 1H9a1 1 0 01-1-1V6H5a1 1 0 00-1 1v26a1 1 0 001 1h26a1 1 0 001-1V7a1 1 0 00-1-1z"}}),_c('path',{attrs:{"d":"M22 6V4a4 4 0 00-8 0v2h-4v4h16V6zm-2 0h-4V4a2 2 0 014 0z"}})])
          )
        }
      }
    