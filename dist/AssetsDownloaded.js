
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
            children.concat([_c('path',{attrs:{"d":"M12 24H4V4h28v11.624a12.045 12.045 0 012 1.458V3a1 1 0 00-1-1H3a1 1 0 00-1 1v22a1 1 0 001 1h11a11.975 11.975 0 01.181-2z"}}),_c('path',{attrs:{"d":"M26 16.05A9.95 9.95 0 1035.95 26 9.95 9.95 0 0026 16.05zm-.17 16.181l-5.39-5.364a.5.5 0 01.339-.867H24v-5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V26h3.221a.5.5 0 01.339.867l-5.39 5.364a.25.25 0 01-.34 0z"}})])
          )
        }
      }
    