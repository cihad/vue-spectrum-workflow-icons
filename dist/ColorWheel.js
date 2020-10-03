
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
            children.concat([_c('path',{attrs:{"d":"M32 18a13.953 13.953 0 00-4.114-9.9L18 18z","opacity":".2"}}),_c('path',{attrs:{"d":"M18 18l9.919 9.869A13.956 13.956 0 0032 18z","opacity":".33"}}),_c('path',{attrs:{"d":"M18 18v14a13.955 13.955 0 009.874-4.087z","opacity":".47"}}),_c('path',{attrs:{"d":"M18 32V18l-9.9 9.889A13.96 13.96 0 0018 32z","opacity":".6"}}),_c('path',{attrs:{"d":"M18 18H4a13.959 13.959 0 004.1 9.889z","opacity":".7"}}),_c('path',{attrs:{"d":"M18 18L8.09 8.122A13.953 13.953 0 004 18z","opacity":".8"}}),_c('path',{attrs:{"d":"M18 2a16 16 0 1016 16A16 16 0 0018 2zm0 30A13.991 13.991 0 018.07 8.144L17.939 18V4H18a14 14 0 010 28z"}})])
          )
        }
      }
    