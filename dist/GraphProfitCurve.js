
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
            children.concat([_c('path',{attrs:{"d":"M2.513 2.006A.51.51 0 002 2.514v1a.5.5 0 00.492.493A28.07 28.07 0 0122.036 12H20v2h3.89a30.937 30.937 0 017.1 19.512.494.494 0 00.493.49h1a.508.508 0 00.507-.512C32.745 16.791 20.308 2.28 2.513 2.006zM22 28h2v4h-2z"}}),_c('path',{attrs:{"d":"M22 22h2v4h-2zm0-6h2v4h-2zm-8-4h4v2h-4zm-6 0h4v2H8zm-6 0h4v2H2z"}})])
          )
        }
      }
    