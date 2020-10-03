
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
            children.concat([_c('path',{attrs:{"d":"M29.844 12.008l-6.55.01a21.474 21.474 0 00.8-6.08C24.023 3.814 22.547 2 20.921 2a3.327 3.327 0 00-3.281 3.164c-.471 4.555-5.253 8.263-7.768 9.373A.99.99 0 009 14H3a1 1 0 00-1 1v16a1 1 0 001 1h6a1 1 0 001-1v-1h14.444a4.636 4.636 0 004.126-2.423L32.554 16.3a3 3 0 00-2.71-4.292zm.9 3.424l-4.012 11.356a1.842 1.842 0 01-1.742 1.232L10 28V16.6c2.867-1.153 9.15-5.525 9.64-11.4A1.374 1.374 0 0120.921 4c.61 0 1.121.742 1.173 1.938A15.049 15.049 0 0120.348 14h9.5a1 1 0 01.901 1.432zM25.458 30z"}})])
          )
        }
      }
    