
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
            children.concat([_c('path',{attrs:{"d":"M32 2H4a2 2 0 00-2 2v28a2 2 0 002 2h28a2 2 0 002-2V4a2 2 0 00-2-2zM18 30.2A12.2 12.2 0 1130.2 18 12.2 12.2 0 0118 30.2z"}}),_c('path',{attrs:{"d":"M15.591 20.484l-1.1 3.322a.234.234 0 01-.259.194h-2.589c-.172 0-.215-.086-.172-.237 1.143-3.236 2.977-8.543 4.336-12.275a3.849 3.849 0 00.215-1.337.136.136 0 01.151-.151h3.473a.162.162 0 01.173.108c1.575 4.336 3.3 9.276 4.9 13.676.064.151.021.216-.13.216h-2.85a.193.193 0 01-.216-.151l-1.208-3.365zm4.055-2.459c-.431-1.467-1.294-3.926-1.725-5.48H17.9c-.324 1.467-1.1 3.732-1.661 5.48z"}})])
          )
        }
      }
    