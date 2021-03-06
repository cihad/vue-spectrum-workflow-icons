
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
            children.concat([_c('path',{attrs:{"d":"M28.971 34H7a1.117 1.117 0 01-.953-1.477L7.879 26h20.214l1.831 6.523A1.117 1.117 0 0128.971 34zM32.85 2.676l-2.073 2.463a2.623 2.623 0 00-.477 2.526l1.027 3.051-2.466-2.073a2.623 2.623 0 00-2.525-.479L23.284 9.19l2.073-2.463a2.623 2.623 0 00.48-2.527L24.81 1.15l2.463 2.073A2.623 2.623 0 0029.8 3.7z"}}),_c('path',{attrs:{"d":"M29.135 13.316l-2.129-1.791-2.637.887A3.4 3.4 0 0120.684 7l1.791-2.129-.415-1.233A12.352 12.352 0 009 24h17.291A12.316 12.316 0 0030 15.176a12.576 12.576 0 00-.075-1.363 3.416 3.416 0 01-.79-.497z"}})])
          )
        }
      }
    