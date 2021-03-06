
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
            children.concat([_c('path',{attrs:{"d":"M20 2v10h10L20 2z"}}),_c('path',{attrs:{"d":"M16 23a1 1 0 011-1h13v-8H19a1 1 0 01-1-1V2H7a1 1 0 00-1 1v30a1 1 0 001 1h9z"}}),_c('path',{attrs:{"d":"M28.208 32.25L36 26.584V35a1 1 0 01-1 1H19a1 1 0 01-1-1v-8.416l7.792 5.667a2.054 2.054 0 002.416-.001zM27 30.347L36 24H18z"}})])
          )
        }
      }
    