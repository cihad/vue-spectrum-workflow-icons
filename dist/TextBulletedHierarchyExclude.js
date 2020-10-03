
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
            children.concat([_c('path',{attrs:{"d":"M27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zM20 27a6.929 6.929 0 011.475-4.252l9.777 9.777A6.966 6.966 0 0120 27zm12.525 4.252l-9.777-9.777a6.966 6.966 0 019.777 9.777z"}}),_c('rect',{attrs:{"height":"6","rx":"2.8","ry":"2.8","width":"6","y":"2"}}),_c('rect',{attrs:{"height":"6","rx":"2.8","ry":"2.8","width":"6","x":"6","y":"14"}}),_c('rect',{attrs:{"height":"6","rx":"2.8","ry":"2.8","width":"6","x":"6","y":"26"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"22","x":"8","y":"4"}}),_c('path',{attrs:{"d":"M27 16H15a1 1 0 00-1 1v2a1 1 0 001 1h3.515A10.975 10.975 0 0127 16zM16.05 28H15a1 1 0 00-1 1v2a1 1 0 001 1h2.21a10.942 10.942 0 01-1.16-4z"}})])
          )
        }
      }
    