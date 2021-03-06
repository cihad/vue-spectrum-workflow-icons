
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
            children.concat([_c('path',{attrs:{"d":"M20 7.5V6h-2v6h2v-1.5a.5.5 0 01.5-.5h15a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-15a.5.5 0 01-.5-.5V14h-2a2 2 0 01-2-2V6a2 2 0 012-2h2V2.5a.5.5 0 01.5-.5h15a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-15a.5.5 0 01-.5-.5zm-5.073 19.02c-1.13-.1-1.148-1.009-1.148-2.145a10.338 10.338 0 002.428-6.159c0-3.73-2.123-6.216-5.178-6.216S5.85 14.486 5.85 18.216a10.339 10.339 0 002.429 6.159c0 1.136-.018 2.046-1.151 2.145-1.548.137-6.611 1.818-7.066 6.755A.686.686 0 00.711 34h20.594a.688.688 0 00.689-.687v-.038c-.456-4.937-5.519-6.62-7.067-6.755z"}})])
          )
        }
      }
    