
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
            children.concat([_c('path',{attrs:{"d":"M14.75 28H9.586a1 1 0 00-.707.293L6 31.171V29a1 1 0 00-1-1H3a1 1 0 01-1-1V15a1 1 0 011-1h16a1 1 0 011 1v1.893a12.26 12.26 0 012-1.124V15a3 3 0 00-3-3H3a3 3 0 00-3 3v12a3 3 0 003 3h1v4.793a.5.5 0 00.854.354L10 30h5.084a12.221 12.221 0 01-.334-2z"}}),_c('path',{attrs:{"d":"M24 14.6v.484A12.209 12.209 0 0135.693 18.3 2.972 2.972 0 0036 17V5a3 3 0 00-3-3H15a3 3 0 00-3 3v5h7.4a4.6 4.6 0 014.6 4.6zm3 3.5a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm5 9.4a.5.5 0 01-.5.5H28v3.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V28h-3.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H26v-3.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V26h3.5a.5.5 0 01.5.5z"}})])
          )
        }
      }
    