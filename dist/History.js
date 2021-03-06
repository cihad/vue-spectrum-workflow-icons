
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
            children.concat([_c('path',{attrs:{"d":"M19 6h-2a1 1 0 00-1 1v10.586a1 1 0 00.293.707L21.9 23.9a1 1 0 001.414 0l1.336-1.336a1 1 0 000-1.414L20 16.5V7a1 1 0 00-1-1z"}}),_c('path',{attrs:{"d":"M18 2A15.946 15.946 0 006.856 6.519 13.124 13.124 0 002.847 14H.5a.5.5 0 00-.5.5.49.49 0 00.147.35l3.537 4.033a.5.5 0 00.632 0l3.537-4.033A.49.49 0 008 14.5a.5.5 0 00-.5-.5H4.969a11.708 11.708 0 013.489-6.245 14 14 0 11-.009 20.481.5.5 0 00-.691.006l-.707.707a.506.506 0 000 .723A16 16 0 1018 2z"}})])
          )
        }
      }
    