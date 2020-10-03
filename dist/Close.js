
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
            children.concat([_c('path',{attrs:{"d":"M26.485 6.686L18 15.172 9.515 6.686a1 1 0 00-1.414 0L6.686 8.1a1 1 0 000 1.414L15.172 18l-8.486 8.485a1 1 0 000 1.414L8.1 29.314a1 1 0 001.414 0L18 20.828l8.485 8.486a1 1 0 001.414 0l1.415-1.414a1 1 0 000-1.414L20.828 18l8.486-8.485a1 1 0 000-1.414L27.9 6.686a1 1 0 00-1.415 0z"}})])
          )
        }
      }
    