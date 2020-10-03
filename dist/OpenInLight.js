
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
            children.concat([_c('path',{attrs:{"d":"M4 15.5V4h28v26H18.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H33a1 1 0 001-1V3a1 1 0 00-1-1H3a1 1 0 00-1 1v12.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5z"}}),_c('path',{attrs:{"d":"M5.54 18.853l3.389 3.39-7.546 7.546a.5.5 0 000 .707L3.5 32.617a.5.5 0 00.707 0l7.546-7.546 3.389 3.389a.5.5 0 00.858-.353V18H5.893a.5.5 0 00-.353.853z"}})])
          )
        }
      }
    