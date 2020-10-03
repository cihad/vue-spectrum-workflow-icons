
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
            children.concat([_c('path',{attrs:{"d":"M35.948 30.684L32 20V5a1 1 0 00-1-1H5a1 1 0 00-1 1v15L.052 30.684A1.011 1.011 0 000 31a1 1 0 001 1h34a1 1 0 001-1 1.011 1.011 0 00-.052-.316zM12 30l1.333-4h9.334L24 30zm18-10H6V6h24z"}})])
          )
        }
      }
    