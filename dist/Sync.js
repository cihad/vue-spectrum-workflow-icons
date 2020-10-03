
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
            children.concat([_c('path',{attrs:{"d":"M21 16a1 1 0 001-1V9a1 1 0 00-1-1H10V3.735A.733.733 0 009.261 3a.718.718 0 00-.513.216l-8.559 7.8a.735.735 0 000 .984l8.559 8.784a.718.718 0 00.513.216.733.733 0 00.739-.735V16zm14.811 8l-8.559-8.784a.718.718 0 00-.513-.216.733.733 0 00-.739.735V20H15a1 1 0 00-1 1v6a1 1 0 001 1h11v4.265a.733.733 0 00.739.735.718.718 0 00.513-.216l8.559-7.8a.735.735 0 000-.984z"}})])
          )
        }
      }
    