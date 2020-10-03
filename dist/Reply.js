
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
            children.concat([_c('path',{attrs:{"d":"M15.029 10H14V4.8a.8.8 0 00-.806-.8.785.785 0 00-.56.236L2.207 15.464a.8.8 0 000 1.072l10.427 11.228a.785.785 0 00.56.236.8.8 0 00.806-.8V22a19.71 19.71 0 0118.791 6.81.67.67 0 001.209-.4C34 25.453 30.732 10 15.029 10z"}})])
          )
        }
      }
    