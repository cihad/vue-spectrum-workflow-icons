
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"36","height":"36"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M20.181 25.932a1.833 1.833 0 01-1.954 2.015 1.862 1.862 0 01-1.956-2.015 1.955 1.955 0 113.91 0zM17.953 8a9.232 9.232 0 00-4.518 1.072c-.119.063-.119.185-.119.307v2.971a.15.15 0 00.238.122 7.385 7.385 0 013.744-1.01c1.813 0 2.527.766 2.527 1.869 0 .95-.565 1.593-1.545 2.603-1.427 1.472-2.29 2.389-2.29 3.829a3.417 3.417 0 00.714 2.114.488.488 0 00.386.123h2.586a.13.13 0 00.119-.215 3.302 3.302 0 01-.476-1.686c0-.917 1.1-1.928 2.26-3.062a5.474 5.474 0 001.901-4.226c0-2.696-1.96-4.81-5.527-4.81zM35 18A17 17 0 1118 1a17 17 0 0117 17zm-3.65 0A13.35 13.35 0 1018 31.35 13.35 13.35 0 0031.35 18z"}})])
          )
        }
      }
    