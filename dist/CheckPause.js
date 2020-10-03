
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
            children.concat([_c('path',{attrs:{"d":"M23.1 15.343l6.391-8.215a1 1 0 00-.175-1.4l-1.459-1.136a1 1 0 00-1.4.175L12.822 22.283l-6.647-6.612a1 1 0 00-1.414 0L3.437 17a1 1 0 000 1.415l8.926 8.9a1 1 0 001.5-.093l.888-1.142A12.294 12.294 0 0123.1 15.343z"}}),_c('path',{attrs:{"d":"M27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm-1 13.474h-2.632v-9.148H26zm4.632 0H28v-9.148h2.632z"}})])
          )
        }
      }
    