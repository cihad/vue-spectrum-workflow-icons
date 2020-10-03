
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
            children.concat([_c('path',{attrs:{"d":"M20 2v10h10L20 2z"}}),_c('path',{attrs:{"d":"M16.5 27A10.5 10.5 0 0127 16.5a10.4 10.4 0 013 .488V14H19a1 1 0 01-1-1V2H7a1 1 0 00-1 1v30a1 1 0 001 1h12.225a10.424 10.424 0 01-2.725-7z"}}),_c('path',{attrs:{"d":"M19.022 26h2.762A5.307 5.307 0 0126 21.784v-2.762A8.119 8.119 0 0019.022 26zm13.193 0h2.762A8.119 8.119 0 0028 19.022v2.761A5.307 5.307 0 0132.216 26zm-10.431 2h-2.762A8.119 8.119 0 0026 34.978v-2.762A5.307 5.307 0 0121.784 28zM28 32.216v2.761A8.119 8.119 0 0034.978 28h-2.762A5.307 5.307 0 0128 32.216zM24.778 27A2.222 2.222 0 1127 29.222 2.222 2.222 0 0124.778 27z"}})])
          )
        }
      }
    