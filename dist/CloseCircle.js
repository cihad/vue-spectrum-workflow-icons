
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
            children.concat([_c('path',{attrs:{"d":"M29.314 6.686a16 16 0 100 22.627 16 16 0 000-22.627zm-2.687 18.527l-1.414 1.414a1.2 1.2 0 01-1.7 0L18 21.111l-5.516 5.516a1.2 1.2 0 01-1.7 0l-1.409-1.415a1.2 1.2 0 010-1.7L14.889 18l-5.514-5.516a1.2 1.2 0 010-1.7l1.414-1.414a1.2 1.2 0 011.7 0L18 14.888l5.516-5.515a1.2 1.2 0 011.7 0l1.414 1.414a1.2 1.2 0 010 1.7L21.111 18l5.516 5.516a1.2 1.2 0 010 1.7z"}})])
          )
        }
      }
    