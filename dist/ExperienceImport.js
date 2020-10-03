
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
            children.concat([_c('path',{attrs:{"d":"M6 14v-3.328a.5.5 0 01.866-.341L14 18l-7.134 7.669A.5.5 0 016 25.328V22H1a1 1 0 01-1-1v-6a1 1 0 011-1z"}}),_c('path',{attrs:{"d":"M35 4H5a1 1 0 00-1 1v3h28v8H16v12H4v3a1 1 0 001 1h30a1 1 0 001-1V5a1 1 0 00-1-1zm-3 24H18v-4h14zm0-6H18v-4h14z"}})])
          )
        }
      }
    