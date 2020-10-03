
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
            children.concat([_c('path',{attrs:{"d":"M17.022 23.848l6.122 5.988a.5.5 0 00.542.106.5.5 0 00.314-.454V7a1 1 0 00-1-1H11a1 1 0 00-1 1v22.506a.523.523 0 00.306.456.481.481 0 00.542-.1z"}}),_c('path',{attrs:{"d":"M17.022 23.848l6.122 5.988a.5.5 0 00.542.106.5.5 0 00.314-.454V7a1 1 0 00-1-1H11a1 1 0 00-1 1v22.506a.523.523 0 00.306.456.481.481 0 00.542-.1z"}})])
          )
        }
      }
    