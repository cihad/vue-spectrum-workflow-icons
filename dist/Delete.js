
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
            children.concat([_c('path',{attrs:{"d":"M31.5 6H24V4a2 2 0 00-2-2H12a2 2 0 00-2 2v2H2.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h2l2.413 25.1a1 1 0 001 .9h18.179a1 1 0 001-.9L29.5 8h2a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zM11.065 29A1 1 0 0110 28.068l-1.071-16a1 1 0 112-.134l1.071 16A1 1 0 0111.065 29zM18 28a1 1 0 01-2 0V12a1 1 0 012 0zm4-22H12V4h10zm2 22.068a1 1 0 11-2-.134l1.071-16a1 1 0 112 .134z"}})])
          )
        }
      }
    