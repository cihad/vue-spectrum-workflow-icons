
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
            children.concat([_c('path',{attrs:{"d":"M20 2v10h10L20 2z"}}),_c('path',{attrs:{"d":"M19 14a1 1 0 01-1-1V2H7a1 1 0 00-1 1v30a1 1 0 001 1h22a1 1 0 001-1V14zm7.069 16.752h-1.931a.612.612 0 01-.59-.344s-1.41-2.4-1.908-3.271c-.6 1.1-1.215 2.213-1.83 3.289a.566.566 0 01-.533.325h-1.839a.476.476 0 01-.406-.725l2.94-4.8-2.872-4.757a.476.476 0 01.407-.723H19.4a.67.67 0 01.584.342l1.8 3.2L23.49 20.1a.67.67 0 01.59-.353h1.786a.476.476 0 01.406.724l-2.83 4.63 3.032 4.926a.476.476 0 01-.405.725zM14.62 29.028a.257.257 0 01-.209.408h-2.744a.257.257 0 01-.206-.1L8 24.718l3.461-4.618a.256.256 0 01.206-.1h2.744a.257.257 0 01.209.407l-3.505 4.31z"}})])
          )
        }
      }
    