
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
            children.concat([_c('path',{attrs:{"d":"M26 4v27.5l-6.522-6.523-1.412-1.411-1.416 1.411L10 31.6 10.011 4zm1-2H9.012a1 1 0 00-1 1L8 35.551c0 .288.1.443.263.443a.517.517 0 00.323-.162l9.476-9.438 9.375 9.376a.488.488 0 00.318.177c.147 0 .243-.152.243-.429V3A1 1 0 0027 2z"}})])
          )
        }
      }
    