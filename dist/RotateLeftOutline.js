
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
            children.concat([_c('path',{attrs:{"d":"M33 10H11a1 1 0 00-1 1v22a1 1 0 001 1h22a1 1 0 001-1V11a1 1 0 00-1-1zm-1 22H12V12h20z"}}),_c('path',{attrs:{"d":"M7.5 15h-2v-3a6 6 0 016-6h2a1 1 0 001-1V4a1 1 0 00-1-1h-2a9 9 0 00-9 9v3h-2a.5.5 0 00-.5.5.49.49 0 00.147.35l3.537 4.033a.5.5 0 00.632 0l3.537-4.033A.49.49 0 008 15.5a.5.5 0 00-.5-.5z"}})])
          )
        }
      }
    