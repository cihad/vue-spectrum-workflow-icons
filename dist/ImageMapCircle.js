
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
            children.concat([_c('path',{attrs:{"d":"M32 10.461V4.5a.5.5 0 00-.5-.5h-5.961a15.907 15.907 0 00-15.078 0H4.5a.5.5 0 00-.5.5v5.961a15.906 15.906 0 000 15.078V31.5a.5.5 0 00.5.5h5.961a15.907 15.907 0 0015.078 0H31.5a.5.5 0 00.5-.5v-5.961a15.906 15.906 0 000-15.079zM26 6h4v4h-4zM6 6h4v4H6zm4 24H6v-4h4zm20 0h-4v-4h4zm.537-6H24.5a.5.5 0 00-.5.5v6.038a13.778 13.778 0 01-12 0V24.5a.5.5 0 00-.5-.5H5.463a13.778 13.778 0 010-12H11.5a.5.5 0 00.5-.5V5.462a13.778 13.778 0 0112 0V11.5a.5.5 0 00.5.5h6.037a13.778 13.778 0 010 12z"}})])
          )
        }
      }
    