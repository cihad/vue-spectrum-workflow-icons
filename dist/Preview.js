
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
            children.concat([_c('path',{attrs:{"d":"M33.191 32.143L28.646 27.6a9.065 9.065 0 10-3.046 3.046l4.546 4.545a2.044 2.044 0 003.048 0A2.133 2.133 0 0033.781 34a2.163 2.163 0 00-.59-1.857zM15.412 22.98a5.568 5.568 0 115.568 5.568 5.568 5.568 0 01-5.568-5.568z"}}),_c('path',{attrs:{"d":"M33 4H3a1 1 0 00-1 1v26a1 1 0 001 1h11.232a11.322 11.322 0 01-2.068-2H4V10h28v17.777l2 1.99V5a1 1 0 00-1-1z"}})])
          )
        }
      }
    