
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
            children.concat([_c('path',{attrs:{"d":"M25.458 6zm7.096 13.7L28.57 8.424A4.636 4.636 0 0024.444 6H10a1 1 0 00-1-1H3a1 1 0 00-1 1v16a1 1 0 001 1h6a1 1 0 001-1v-.476c2.545 1.174 7.177 4.83 7.64 9.312A3.327 3.327 0 0020.921 34c1.626 0 3.1-1.814 3.173-3.937a21.477 21.477 0 00-.8-6.081l6.55.01a3 3 0 002.71-4.292zM29.847 22h-9.5a15.051 15.051 0 011.746 8.063c-.052 1.2-.563 1.932-1.173 1.937a1.374 1.374 0 01-1.281-1.2c-.49-5.873-6.773-10.245-9.64-11.4V8l14.991-.02a1.842 1.842 0 011.742 1.232l4.017 11.356A1 1 0 0129.847 22z"}})])
          )
        }
      }
    