
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
            children.concat([_c('path',{attrs:{"d":"M13.4 4c-4.5 0-8.919 3.623-9.354 8.105A9.009 9.009 0 0013 22c1.05 0 3-.075 3-.075V33.5a.5.5 0 00.5.5h2a.5.5 0 00.5-.5V7h6v26.5a.5.5 0 00.5.5h2a.5.5 0 00.5-.5V5a1 1 0 00-1-1z"}})])
          )
        }
      }
    