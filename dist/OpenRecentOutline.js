
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
            children.concat([_c('path',{attrs:{"d":"M16.051 28H4l4.689-14h24.536l-1.093 3.279a10.983 10.983 0 011.729 1.138l1.7-5.1A1 1 0 0034.613 12H32V9a1 1 0 00-1-1l-12.332.007-3.3-3.4A2 2 0 0013.929 4H4a2 2 0 00-2 2v23a1 1 0 001 1h13.427a10.837 10.837 0 01-.376-2z"}}),_c('path',{attrs:{"d":"M27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm0 16a7.1 7.1 0 01-1-14.121V27a1 1 0 00.293.707l3.023 3.023a.5.5 0 00.707 0l.707-.708a.5.5 0 000-.707L28 26.586v-6.608A7.1 7.1 0 0127 34.1z"}})])
          )
        }
      }
    