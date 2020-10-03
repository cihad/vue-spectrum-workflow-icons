
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
            children.concat([_c('path',{attrs:{"d":"M18 2a16 16 0 1016 16A16 16 0 0018 2zm-8 23.017V10.984a1 1 0 011.625-.781L14 12.1v11.8l-2.375 1.9A1 1 0 0110 25.017zm18.4-6.236L19.625 25.8A1 1 0 0118 25.017V10.984a1 1 0 011.625-.781L28.4 17.22a1 1 0 010 1.561z"}})])
          )
        }
      }
    