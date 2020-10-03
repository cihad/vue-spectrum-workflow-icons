
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
            children.concat([_c('path',{attrs:{"d":"M18 23.658V33a1 1 0 001 1h4a1 1 0 001-1V21.9l-4.27 3.493zM2 33a1 1 0 001 1h4a1 1 0 001-1V20.7l-6 5.139zm8-14.019V33a1 1 0 001 1h4a1 1 0 001-1V21.658l-4.211-4.211zm16 1.278V33a1 1 0 001 1h4a1 1 0 001-1V20.769l-2.8-3.13z"}}),_c('path',{attrs:{"d":"M24.6 8.833l2.169 2.427-6.631 5.4-7.7-7.7a.5.5 0 00-.679-.026L2 17.289v5.267l9.895-8.481 7.651 7.651a.5.5 0 00.67.034l9.056-7.814 1.856 2.195a.5.5 0 00.872-.333V8h-7.03a.5.5 0 00-.37.833z"}})])
          )
        }
      }
    