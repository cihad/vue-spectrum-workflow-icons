
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
            children.concat([_c('path',{attrs:{"d":"M11.776 22.661L7.564 30.24a.5.5 0 00.617.693L12.2 29.5a.5.5 0 01.639.3l1.432 4.016a.5.5 0 00.926.038l1.681-3.708-3.042-6.441a11.429 11.429 0 01-2.06-1.044zm16.66 7.579l-3.869-7.807a11.248 11.248 0 01-8.218 1.935l4.459 9.49a.5.5 0 00.925-.038l1.432-4.02a.5.5 0 01.64-.3l4.014 1.432a.5.5 0 00.617-.692zM18 4a9 9 0 109 9 9 9 0 00-9-9zm0 14.5a5.5 5.5 0 115.5-5.5 5.5 5.5 0 01-5.5 5.5z"}})])
          )
        }
      }
    