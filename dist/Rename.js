
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
            children.concat([_c('path',{attrs:{"d":"M31 0h2v36h-2zm-5.412 31.7L15.633 4.21c-.041-.169-.082-.21-.251-.21h-4.153a.2.2 0 00-.21.21 4.564 4.564 0 01-.3 1.739L1.485 31.662c-.041.21.045.338.255.338h2.88a.3.3 0 00.338-.255L8.09 23H18.7l3.161 8.79a.376.376 0 00.339.21h3.218c.214 0 .256-.128.17-.3zM13.347 6.88h.041c.759 2.707 3.355 9.972 4.44 13.12h-8.87c1.59-4.584 3.704-10.546 4.389-13.12z"}})])
          )
        }
      }
    