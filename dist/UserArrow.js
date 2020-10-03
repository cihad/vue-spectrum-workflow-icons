
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
            children.concat([_c('path',{attrs:{"d":"M10.874 19.622a.5.5 0 00-.874.332V24H3a1 1 0 00-1 1v4a1 1 0 001 1h7v3.818a.5.5 0 00.874.332L18 27zm15.381.153a1.438 1.438 0 01-1.244-1.443v-2.083a1.441 1.441 0 01.367-.93 11 11 0 002.5-6.866c0-5.2-2.756-8.1-6.919-8.1s-7 3.018-7 8.1a11.124 11.124 0 002.645 6.893 1.388 1.388 0 01.344.9v2.126a1.4 1.4 0 01-1.368 1.394L22.569 27l-2.99 3h16.357l.011-1.526c0-2.163-1.478-7.865-9.692-8.699z"}})])
          )
        }
      }
    