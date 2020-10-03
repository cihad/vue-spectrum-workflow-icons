
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
            children.concat([_c('path',{attrs:{"d":"M2 3v30a1 1 0 001 1h30a1 1 0 001-1V3a1 1 0 00-1-1H3a1 1 0 00-1 1zm30 21v8h-8v-8zm-10 0v8h-8v-8zm-10 0v8H4v-8zm0-10v8H4v-8zM32 4v8h-8V4zM22 4v8h-8V4zM12 4v8H4V4z"}})])
          )
        }
      }
    