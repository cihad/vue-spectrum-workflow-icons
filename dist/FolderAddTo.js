
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
            children.concat([_c('path',{attrs:{"d":"M12.064 27.418l8.356-9.076a3.086 3.086 0 012.213-.961 3.044 3.044 0 013.041 3.037v.943A13.842 13.842 0 0134 25.605V11a1 1 0 00-1-1H2v21a1 1 0 001 1h13.285z"}}),_c('path',{attrs:{"d":"M23.273 23.6v-3.182a.636.636 0 00-1.086-.45l-6.86 7.449 6.86 7.449a.636.636 0 001.086-.45v-3.229a11.687 11.687 0 0111.916 4.632.45.45 0 00.811-.26C36 33.638 33.808 23.6 23.273 23.6zM16 8H2V5.5A1.5 1.5 0 013.5 4h7.672a2 2 0 011.414.586z"}})])
          )
        }
      }
    