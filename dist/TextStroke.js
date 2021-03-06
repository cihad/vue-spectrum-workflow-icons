
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
            children.concat([_c('path',{attrs:{"d":"M25 32H11a1 1 0 01-1-1v-4a1 1 0 011-1h3V10h-4v3a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h26a1 1 0 011 1v7.973a1 1 0 01-1 1h-4a1 1 0 01-1-1V10h-4v16h3a1 1 0 011 1v4a1 1 0 01-1 1zm-13-4v2h12v-2h-4V8h8v4h2V5.96H6V12h2V8h8v20zM6 5v1z"}})])
          )
        }
      }
    