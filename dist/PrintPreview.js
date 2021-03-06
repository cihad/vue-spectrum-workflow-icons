
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
            children.concat([_c('path',{attrs:{"d":"M10 2v8H2l8-8z"}}),_c('path',{attrs:{"d":"M11.7 23A11.3 11.3 0 0123 11.7c.338 0 .67.021 1 .05V3a1 1 0 00-1-1H12v9a1 1 0 01-1 1H2v15a1 1 0 001 1h9.878a11.229 11.229 0 01-1.178-5z"}}),_c('path',{attrs:{"d":"M35.191 32.143L30.646 27.6a9.066 9.066 0 10-3.046 3.046l4.545 4.545a2.044 2.044 0 003.048 0 2.195 2.195 0 00-.002-3.048zM17.412 22.98a5.568 5.568 0 115.568 5.567 5.568 5.568 0 01-5.568-5.567z"}})])
          )
        }
      }
    