
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
            children.concat([_c('path',{attrs:{"d":"M4 5v26a1 1 0 001 1h26a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1zm26 25H6V6h24z"}}),_c('path',{attrs:{"d":"M8 8v20h20V8zm18 18H10V10h16z"}})])
          )
        }
      }
    