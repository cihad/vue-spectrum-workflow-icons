
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"36","height":"36"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M18 1a17 17 0 1017 17A17 17 0 0018 1zm10.982 27.183a10.826 10.826 0 00-6.224-3.128 1.307 1.307 0 01-1.131-1.311V21.85a1.313 1.313 0 01.333-.844 9.99 9.99 0 002.28-6.236c0-4.72-2.508-7.36-6.287-7.36s-6.358 2.737-6.358 7.36a10.103 10.103 0 002.383 6.238 1.31 1.31 0 01.334.845v1.883a1.3 1.3 0 01-1.14 1.31 10.863 10.863 0 00-6.24 3.042 15 15 0 1122.05.094z"}})])
          )
        }
      }
    