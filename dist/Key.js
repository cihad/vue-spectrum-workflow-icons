
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
            children.concat([_c('path',{attrs:{"d":"M35.522 8.775L29.06 2.312a1.5 1.5 0 00-2.122 0L13.177 16.073A8.9 8.9 0 009 15a9 9 0 109 9 8.9 8.9 0 00-1.049-4.133l6.726-6.726 3.74 3.74a.75.75 0 001.061 0l3.344-3.344-4.27-4.271 1.231-1.231 4.27 4.271 2.469-2.47a.75.75 0 000-1.061zM7.5 28.5a3 3 0 113-3 3 3 0 01-3 3z"}})])
          )
        }
      }
    