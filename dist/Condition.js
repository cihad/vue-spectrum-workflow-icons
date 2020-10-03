
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
            children.concat([_c('path',{attrs:{"d":"M27.828 25l4.88-4.879a1 1 0 000-1.414l-1.415-1.414a1 1 0 00-1.414 0L25 22.172l-4.879-4.88a1 1 0 00-1.414 0l-1.414 1.415a1 1 0 000 1.414L22.172 25l-4.88 4.879a1 1 0 000 1.414l1.415 1.414a1 1 0 001.414 0L25 27.828l4.879 4.879a1 1 0 001.414 0l1.414-1.414a1 1 0 000-1.414zm-6.38-21.572L19.8 2.295a1 1 0 00-1.39.257L9.684 15.24l-4.657-4.657a1 1 0 00-1.414 0L2.2 11.997a1 1 0 000 1.414l7.207 7.207a1 1 0 001.53-.14l10.768-15.66a1 1 0 00-.257-1.39z"}})])
          )
        }
      }
    