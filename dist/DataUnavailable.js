
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
            children.concat([_c('ellipse',{attrs:{"cx":"18","cy":"7","rx":"16","ry":"5"}}),_c('path',{attrs:{"d":"M14.7 27a12.3 12.3 0 01.342-2.84C10.02 23.808 3.473 22.605 2 20.27V29c0 2.643 6.568 4.8 14.879 4.982A12.236 12.236 0 0114.7 27zM27 14.7a12.234 12.234 0 017 2.192V10.27c-2.447 3.095-11.064 4-16 4s-14.212-1.168-16-4V17c0 2.527 6 4.61 13.794 4.947A12.293 12.293 0 0127 14.7z"}}),_c('path',{attrs:{"d":"M27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zM20 27a6.934 6.934 0 011.475-4.252l9.777 9.777A6.966 6.966 0 0120 27zm12.525 4.252l-9.777-9.777a6.966 6.966 0 019.777 9.777z"}})])
          )
        }
      }
    