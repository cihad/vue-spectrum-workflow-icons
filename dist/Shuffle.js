
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
            children.concat([_c('path',{attrs:{"d":"M3 10h4.111l2.65 4.139 3.4-5.528-2.439-3.806a2 2 0 00-1.6-.8H3A1 1 0 002 5v4a1 1 0 001 1zM27.2.206A.688.688 0 0026.705 0a.7.7 0 00-.7.7V4H21a2 2 0 00-1.6.806L7.111 24H3a1 1 0 00-1 1v4a1 1 0 001 1h6.118a2 2 0 001.6-.8L23.03 10H26v3.3a.7.7 0 00.7.7.688.688 0 00.49-.206l5.69-6.469a.5.5 0 000-.65z"}}),_c('path',{attrs:{"d":"M27.2 20.206a.688.688 0 00-.49-.206.7.7 0 00-.7.7V24h-2.98l-2.723-4.248-3.407 5.536 2.5 3.906A2 2 0 0021 30h5v3.3a.7.7 0 00.7.7.688.688 0 00.49-.206l5.685-6.469a.5.5 0 000-.65z"}})])
          )
        }
      }
    