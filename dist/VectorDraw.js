
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
            children.concat([_c('path',{attrs:{"d":"M33.134 11.26l-8.416-8.414a1.068 1.068 0 00-1.51 0l-3.717 3.716a1.052 1.052 0 00-.147 1.289l8.42 8.42.008-.017.186.183a1.066 1.066 0 001.509 0l3.667-3.666a1.066 1.066 0 000-1.511zM17.462 9.383l-7.877 3.628a2 2 0 00-1.011 1.051L1.979 29.973a1 1 0 00.216 1.09l.523.523 8.156-8.157a1.619 1.619 0 01-.037-.254 2 2 0 112 2 1.684 1.684 0 01-.276-.04l-8.147 8.148.592.592a1 1 0 001.09.217l15.913-6.6a2 2 0 001.05-1.011l3.628-7.876z"}})])
          )
        }
      }
    