
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
            children.concat([_c('path',{attrs:{"d":"M3.355 25.983a6.119 6.119 0 010-8.653l5.288-5.288-.034-.034a2.719 2.719 0 010-3.846l1.923-1.923a2.719 2.719 0 013.846 0L16.3 8.162l6.523-6.523a1.02 1.02 0 011.442 0l1.442 1.442a1.02 1.02 0 010 1.442l-6.524 6.524 5.769 5.769 6.524-6.524a1.02 1.02 0 011.442 0l1.442 1.442a1.02 1.02 0 010 1.442L27.838 19.7l1.923 1.923a2.719 2.719 0 010 3.846l-1.923 1.923a2.719 2.719 0 01-3.846 0l-.059-.059-5.288 5.287a6.118 6.118 0 01-8.653 0z"}})])
          )
        }
      }
    