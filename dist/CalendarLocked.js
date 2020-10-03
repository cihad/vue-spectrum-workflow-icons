
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
            children.concat([_c('path',{attrs:{"d":"M35.161 24.048h-1.244v-1.477C33.917 17.837 30.372 14 26 14s-7.917 3.837-7.917 8.571v1.477h-1.291a.826.826 0 00-.792.857v10.238a.826.826 0 00.792.857h18.369a.826.826 0 00.791-.857V24.905a.825.825 0 00-.791-.857zm-13.244-1.477c0-2.84 1.46-5.143 4.083-5.143s4.083 2.3 4.083 5.143v1.477h-8.166zm5.666 8.762v1.81a.826.826 0 01-.791.857h-1.584a.826.826 0 01-.791-.857v-1.81a2.652 2.652 0 01-.792-1.9 2.382 2.382 0 114.75 0 2.652 2.652 0 01-.792 1.9z"}}),_c('path',{attrs:{"d":"M13.467 25a2.963 2.963 0 01.179-1H4V6h4v1a1 1 0 001 1h2a1 1 0 001-1V6h10v1a1 1 0 001 1h2a1 1 0 001-1V6h4v5.74a9.822 9.822 0 012 1.292V5a1 1 0 00-1-1h-5V1a1 1 0 00-1-1h-2a1 1 0 00-1 1v3H12V1a1 1 0 00-1-1H9a1 1 0 00-1 1v3H3a1 1 0 00-1 1v20a1 1 0 001 1h10.467z"}})])
          )
        }
      }
    