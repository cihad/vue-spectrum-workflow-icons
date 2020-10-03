
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
            children.concat([_c('path',{attrs:{"d":"M27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zM20 27a6.935 6.935 0 011.475-4.252l9.777 9.777A6.966 6.966 0 0120 27zm12.526 4.252l-9.778-9.777a6.966 6.966 0 019.778 9.777z"}}),_c('path',{attrs:{"d":"M16.04 28S16 26.984 16 26V8h8v3a1 1 0 001 1h2a1 1 0 001-1V5a1 1 0 00-1-1H1a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1V8h8v20H9a1 1 0 00-1 1v2a1 1 0 001 1h8.21a10.934 10.934 0 01-1.17-4z"}})])
          )
        }
      }
    