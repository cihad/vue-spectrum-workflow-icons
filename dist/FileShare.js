
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
            children.concat([_c('path',{attrs:{"d":"M16 2v10H6L16 2z"}}),_c('path',{attrs:{"d":"M14 23a3 3 0 013-3h1.208a3 3 0 01.6-3.008L26 9.016l4 4.427V3a1 1 0 00-1-1H18v11a1 1 0 01-1 1H6v19a1 1 0 001 1h7z"}}),_c('path',{attrs:{"d":"M31.722 18.331L26 12l-5.708 6.331A1 1 0 0021.035 20H24v7.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V20h2.979a1 1 0 00.743-1.669z"}}),_c('path',{attrs:{"d":"M32 22v10H20V22h-3a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V23a1 1 0 00-1-1z"}})])
          )
        }
      }
    