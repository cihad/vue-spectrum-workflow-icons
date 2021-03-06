
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
            children.concat([_c('path',{attrs:{"d":"M12 24H4V4h28v11.624a12.045 12.045 0 012 1.458V3a1 1 0 00-1-1H3a1 1 0 00-1 1v22a1 1 0 001 1h11a11.975 11.975 0 01.181-2z"}}),_c('path',{attrs:{"d":"M26 16.05A9.95 9.95 0 1035.95 26 9.95 9.95 0 0026 16.05zm6 11.45a.5.5 0 01-.5.5H28v3.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V28h-3.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H24v-3.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V24h3.5a.5.5 0 01.5.5z"}})])
          )
        }
      }
    