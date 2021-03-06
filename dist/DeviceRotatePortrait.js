
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
            children.concat([_c('path',{attrs:{"d":"M36 15.084V8a2 2 0 00-2-2H2a2 2 0 00-2 2v16a2 2 0 002 2h12.751a12.219 12.219 0 01.333-2H6V8h24v7.085zM4 17a1.023 1.023 0 01-1 1 1.022 1.022 0 01-1-1v-2a1.04 1.04 0 011-1 1.041 1.041 0 011 1z"}}),_c('path',{attrs:{"d":"M32.375 20.332l1.478-1.479A.49.49 0 0034 18.5a.5.5 0 00-.5-.5h-5.052a.5.5 0 00-.447.447V23.5a.5.5 0 00.5.5.488.488 0 00.349-.148l1.506-1.506a6.018 6.018 0 012.144 5.6 6.075 6.075 0 11-8.123-6.615.976.976 0 00.62-.921v-1.255a.76.76 0 00-.974-.723 8.919 8.919 0 00-6.451 8.552 9.021 9.021 0 008.645 8.937 8.891 8.891 0 006.154-15.589z"}})])
          )
        }
      }
    