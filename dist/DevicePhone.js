
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
            children.concat([_c('path',{attrs:{"d":"M26 0H10a2 2 0 00-2 2v32a2 2 0 002 2h16a2 2 0 002-2V2a2 2 0 00-2-2zm-9 2h2a1.041 1.041 0 011 1 1.04 1.04 0 01-1 1h-2a1.023 1.023 0 01-1-1 1.024 1.024 0 011-1zm1 33.1a2.1 2.1 0 112.1-2.1 2.1 2.1 0 01-2.1 2.1zm8-5.1H10V6h16z"}})])
          )
        }
      }
    