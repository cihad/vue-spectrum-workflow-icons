
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
            children.concat([_c('path',{attrs:{"d":"M20.647 21.62a29.989 29.989 0 01-.771-5.178 9.971 9.971 0 01.612-2.945 5.755 5.755 0 003.631-5.748 6.111 6.111 0 10-12.222 0 5.748 5.748 0 003.611 5.744 10.467 10.467 0 01.622 2.949 31.39 31.39 0 01-.777 5.179c-2.923.148-10 1.767-12.48 2.351A1.146 1.146 0 002 25.1v3.729A1.153 1.153 0 003.146 30h29.711A1.154 1.154 0 0034 28.836V25.1a1.146 1.146 0 00-.873-1.131c-2.476-.581-9.554-2.2-12.48-2.349z"}}),_c('rect',{attrs:{"height":"2","rx":".5","ry":".5","width":"28","x":"4","y":"32"}})])
          )
        }
      }
    