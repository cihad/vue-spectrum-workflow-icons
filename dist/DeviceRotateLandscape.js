
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
            children.concat([_c('path',{attrs:{"d":"M15.158 30H8V6h16v9.21a12.3 12.3 0 012-.354V2a2 2 0 00-2-2H8a2 2 0 00-2 2v32a2 2 0 002 2h10.625a12.27 12.27 0 01-3.467-6zM15 2h2a1.04 1.04 0 011 1 1.04 1.04 0 01-1 1h-2a1.023 1.023 0 01-1-1 1.024 1.024 0 011-1z"}}),_c('path',{attrs:{"d":"M32.412 20.332l1.479-1.478a.489.489 0 00.147-.35.5.5 0 00-.5-.5h-5.053a.5.5 0 00-.447.448V23.5a.5.5 0 00.5.5.489.489 0 00.35-.147l1.5-1.506a6.015 6.015 0 012.144 5.6 6.074 6.074 0 11-8.123-6.615.976.976 0 00.62-.921v-1.255a.76.76 0 00-.974-.723 8.919 8.919 0 00-6.451 8.552 9.02 9.02 0 008.645 8.936 8.891 8.891 0 006.154-15.589z"}})])
          )
        }
      }
    