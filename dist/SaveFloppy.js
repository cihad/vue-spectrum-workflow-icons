
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
            children.concat([_c('path',{attrs:{"d":"M20 4h4v6h-4z"}}),_c('path',{attrs:{"d":"M31.708 8.293s-4.015-4-4.146-4.114A.969.969 0 0027 4h-1v8H14V4H5a1 1 0 00-1 1v26a1 1 0 001 1h26a1 1 0 001-1V9a1 1 0 00-.292-.707zM26 30H10V16h16z"}})])
          )
        }
      }
    