
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
            children.concat([_c('path',{attrs:{"d":"M24.364 6.509A8.013 8.013 0 0018 10.327a8.013 8.013 0 00-6.364-3.818A7.636 7.636 0 004 14.145c0 7.292 14 16.546 14 16.546s14-9.156 14-16.546a7.636 7.636 0 00-7.636-7.636z"}})])
          )
        }
      }
    