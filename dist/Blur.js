
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
            children.concat([_c('path',{attrs:{"d":"M14.909.347C16.261 9.619 7.182 16.871 7.182 24.3c0 5.548 4.843 10.046 10.818 10.046s10.818-4.5 10.818-10.046c0-7.667-11.494-15.743-13.909-23.953z"}})])
          )
        }
      }
    