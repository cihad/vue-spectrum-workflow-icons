
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
            children.concat([_c('path',{attrs:{"d":"M33 10h-6a1 1 0 00-1 1v2a1 1 0 001 1h3v16H6V14h3a1 1 0 001-1v-2a1 1 0 00-1-1H3a1 1 0 00-1 1v22a1 1 0 001 1h30a1 1 0 001-1V11a1 1 0 00-1-1z"}}),_c('path',{attrs:{"d":"M10.2 17.331l7.445 7.525a.5.5 0 00.7 0l7.455-7.525a.782.782 0 00.2-.526.8.8 0 00-.8-.8H20V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v13h-5.2a.8.8 0 00-.8.8.782.782 0 00.2.531z"}})])
          )
        }
      }
    