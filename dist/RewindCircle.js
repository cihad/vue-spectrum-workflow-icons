
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
            children.concat([_c('path',{attrs:{"d":"M18 2A16 16 0 112 18 16 16 0 0118 2zm2 19.91l2.861 2.5a1 1 0 001.659-.753V12.249a1 1 0 00-1.659-.753L20 14zm-3.658 2.5A1 1 0 0018 23.662V12.248a1 1 0 00-1.658-.752l-7.383 6.459z"}})])
          )
        }
      }
    