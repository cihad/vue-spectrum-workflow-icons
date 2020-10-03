
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
            children.concat([_c('path',{attrs:{"d":"M4 18L18.341 5.452A1 1 0 0120 6.2v23.6a1 1 0 01-1.659.753zm18-7l6.342-5.549A1 1 0 0130 6.2v23.6a1 1 0 01-1.658.753L22 25z"}})])
          )
        }
      }
    