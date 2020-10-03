
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
            children.concat([_c('path',{attrs:{"d":"M18 2.323c-8.6 0-15.578 6.609-15.578 14.761A14.336 14.336 0 007.091 27.6v7.562l6.675-3.872a16.414 16.414 0 004.234.555c8.6 0 15.578-6.609 15.578-14.761S26.6 2.323 18 2.323zm1.639 19.713l-4.049-4.154L8.2 22l8.167-8.942 4.083 3.978 7.463-4.048z"}})])
          )
        }
      }
    