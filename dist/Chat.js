
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
            children.concat([_c('path',{attrs:{"d":"M19 14a1 1 0 011 1v12a1 1 0 01-1 1H9.586a1 1 0 00-.707.293L6 31.171V29a1 1 0 00-1-1H3a1 1 0 01-1-1V15a1 1 0 011-1zM3 12a3 3 0 00-3 3v12a3 3 0 003 3h1v4.793a.5.5 0 00.854.353L10 30h9a3 3 0 003-3V15a3 3 0 00-3-3z"}}),_c('path',{attrs:{"d":"M24 14.6a4.6 4.6 0 00-4.6-4.6H12V5a3 3 0 013-3h18a3 3 0 013 3v12a3 3 0 01-3 3h-3v4.793a.5.5 0 01-.854.353L24 20z"}})])
          )
        }
      }
    