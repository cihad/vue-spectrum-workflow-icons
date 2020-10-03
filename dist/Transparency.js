
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
            children.concat([_c('path',{attrs:{"d":"M12 12h6v6h-6zm6 6h6v6h-6z"}}),_c('path',{attrs:{"d":"M31 4H5a1 1 0 00-1 1v26a1 1 0 001 1h26a1 1 0 001-1V5a1 1 0 00-1-1zm-1 8h-6v6h6v6h-6v6h-6v-6h-6v6H6v-6h6v-6H6v-6h6V6h6v5.98h6V6h6z"}})])
          )
        }
      }
    