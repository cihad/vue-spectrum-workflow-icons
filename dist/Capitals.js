
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
            children.concat([_c('path',{attrs:{"d":"M15 8a1 1 0 011 1v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2h-2v12h1a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2a1 1 0 011-1h1V12H4v2a1 1 0 01-1 1H1a1 1 0 01-1-1V9a1 1 0 011-1zm18 0a1 1 0 011 1v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2h-2v12h1a1 1 0 011 1v2a1 1 0 01-1 1h-6a1 1 0 01-1-1v-2a1 1 0 011-1h1V12h-2v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V9a1 1 0 011-1z"}})])
          )
        }
      }
    