
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
            children.concat([_c('path',{attrs:{"d":"M5 18H4a2 2 0 00-2 2v13a1 1 0 001 1h2a1 1 0 001-1V19a1 1 0 00-1-1zm4 2h7.886A12.285 12.285 0 0127 14.7c.337 0 .67.014 1 .041V10a6 6 0 00-6-6h-8a6 6 0 00-6 6v9a1 1 0 001 1zm5.7 7a12.256 12.256 0 011.06-5H9a1 1 0 00-1 1v6a1 1 0 001 1h6.069a12.3 12.3 0 01-.369-3zm12.4-8.8a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm5 9.4a.5.5 0 01-.5.5h-3.5v3.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-3.5h-3.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h3.5v-3.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v3.5h3.5a.5.5 0 01.5.5z"}})])
          )
        }
      }
    