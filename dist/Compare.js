
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
            children.concat([_c('path',{attrs:{"d":"M35.191 32.143L30.646 27.6a9.066 9.066 0 10-3.046 3.046l4.545 4.545a2.044 2.044 0 003.048 0 2.195 2.195 0 00-.002-3.048zM17.412 22.98a5.568 5.568 0 115.568 5.567 5.568 5.568 0 01-5.568-5.567z"}}),_c('path',{attrs:{"d":"M11.6 23A11.4 11.4 0 0120 12.012V11a1 1 0 00-1-1H1a1 1 0 00-1 1v22a1 1 0 001 1h18a.948.948 0 00.5-.155A11.4 11.4 0 0111.6 23z"}}),_c('path',{attrs:{"d":"M22 9v2.65c.33-.029.662-.05 1-.05a11.334 11.334 0 015 1.167V3a1 1 0 00-1-1H9a1 1 0 00-1 1v5h13a1 1 0 011 1z"}})])
          )
        }
      }
    