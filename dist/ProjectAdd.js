
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
            children.concat([_c('path',{attrs:{"d":"M12 8H0V5a1 1 0 011-1h6.586a1 1 0 01.707.293zm2.7 19.1A12.287 12.287 0 0132 15.869V11a1 1 0 00-1-1H0v21a1 1 0 001 1h14.721a12.251 12.251 0 01-1.021-4.9zm-6.7.4a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-13a.5.5 0 01.5-.5h3a.5.5 0 01.5.5zm6 0a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h3a.5.5 0 01.5.5z"}}),_c('path',{attrs:{"d":"M27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm5 9.4a.5.5 0 01-.5.5H28v3.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V28h-3.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H26v-3.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V26h3.5a.5.5 0 01.5.5z"}})])
          )
        }
      }
    