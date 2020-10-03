
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
            children.concat([_c('path',{attrs:{"d":"M16 6H2V3.5A1.5 1.5 0 013.5 2h7.672a2 2 0 011.414.586zm-4.777 16.734A11.58 11.58 0 0134 19.779V9a1 1 0 00-1-1H2v21a1 1 0 001 1h10.793a11.526 11.526 0 01-2.57-7.266z"}}),_c('path',{attrs:{"d":"M35.385 32.269l-4.917-4.917a9.065 9.065 0 10-3.049 3.048l4.917 4.917a2.044 2.044 0 003.048 0 2.2 2.2 0 00.001-3.048zm-18.15-9.534A5.568 5.568 0 1122.8 28.3a5.568 5.568 0 01-5.566-5.565z"}})])
          )
        }
      }
    