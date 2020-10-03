
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
            children.concat([_c('path',{attrs:{"d":"M20 2v10h10L20 2z"}}),_c('path',{attrs:{"d":"M19 14a1 1 0 01-1-1V2H7a1 1 0 00-1 1v30a1 1 0 001 1h22a1 1 0 001-1V14zm7.888 16.4h-2.8v-4h-3.2v4h-2.8V19.6h2.8v4h3.2v-4h2.8zm-10.953-1.09a.257.257 0 01-.209.407h-2.744a.256.256 0 01-.206-.1L9.315 25l3.461-4.615a.256.256 0 01.206-.1h2.744a.257.257 0 01.209.407L12.43 25z"}})])
          )
        }
      }
    