
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
            children.concat([_c('path',{attrs:{"d":"M18 2.1A15.9 15.9 0 1033.9 18 15.9 15.9 0 0018 2.1zm0 29.813A13.913 13.913 0 1131.913 18 13.912 13.912 0 0118 31.913z"}}),_c('path',{attrs:{"d":"M18 6.2v23.6a11.8 11.8 0 000-23.6z"}})])
          )
        }
      }
    