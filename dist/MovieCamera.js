
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
            children.concat([_c('path',{attrs:{"d":"M32.4 10.2L24 16.5V9.818A1.818 1.818 0 0022.182 8H5.818A1.818 1.818 0 004 9.818v16.364A1.818 1.818 0 005.818 28h16.364A1.818 1.818 0 0024 26.182V19.5l8.4 6.3A1 1 0 0034 25V11a1 1 0 00-1.6-.8z"}})])
          )
        }
      }
    