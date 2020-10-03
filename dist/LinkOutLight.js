
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
            children.concat([_c('path',{attrs:{"d":"M32 17.5V30H4V4h14.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H3a1 1 0 00-1 1v28a1 1 0 001 1h30a1 1 0 001-1V17.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5z"}}),_c('path',{attrs:{"d":"M23.54 2.853l3.389 3.39-9.546 9.546a.5.5 0 000 .707l2.117 2.121a.5.5 0 00.707 0l9.546-9.546 3.389 3.389a.5.5 0 00.858-.353V2H23.893a.5.5 0 00-.353.853z"}})])
          )
        }
      }
    