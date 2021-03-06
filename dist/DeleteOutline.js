
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
            children.concat([_c('path',{attrs:{"d":"M27.491 8l-2.308 24H8.817L6.509 8zM22 2H12a2 2 0 00-2 2v2H2.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h2l2.413 25.1a1 1 0 001 .9h18.179a1 1 0 001-.9L29.5 8h2a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H24V4a2 2 0 00-2-2zM12 6V4h10v2z"}}),_c('path',{attrs:{"d":"M17 29a1 1 0 01-1-1V12a1 1 0 012 0v16a1 1 0 01-1 1zm3.934 0A1 1 0 0120 27.933l1.071-15.995a1 1 0 112 .134L22 28.068a1 1 0 01-1.066.932zm-7.868 0A1 1 0 0014 27.933l-1.075-15.995a1 1 0 10-2 .134l1.071 16a1 1 0 001.07.928z"}})])
          )
        }
      }
    