
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
            children.concat([_c('path',{attrs:{"d":"M14.7 27c0-5.649 2.959-7.639 4.646-9.639a11 11 0 002.5-6.866c0-5.2-2.756-8.1-6.919-8.1s-7 3.018-7 8.1a11.121 11.121 0 002.622 6.865 1.439 1.439 0 01.367.93v2.074a1.431 1.431 0 01-1.248 1.444C1.307 22.537 0 28.259 0 30.516c0 .25.029 3.237.048 3.484h16.845a12.236 12.236 0 01-2.193-7zm8.587-11.727A12.282 12.282 0 0127 14.7c.129 0 .255.015.383.019a12.724 12.724 0 001.011-4.771c0-4.354-2.569-7.552-6.451-7.552-.232 0-.444.042-.668.062a10.93 10.93 0 012.974 8.042 13.2 13.2 0 01-.962 4.773z"}}),_c('path',{attrs:{"d":"M27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zM20 27a6.934 6.934 0 011.475-4.252l9.777 9.777A6.966 6.966 0 0120 27zm12.525 4.252l-9.777-9.777a6.966 6.966 0 019.777 9.777z"}})])
          )
        }
      }
    