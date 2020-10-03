
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
            children.concat([_c('path',{attrs:{"d":"M27.2 20.206a.688.688 0 00-.49-.206.7.7 0 00-.7.7V24H20V10h6v3.3a.7.7 0 00.7.7.688.688 0 00.49-.206l5.69-6.469a.5.5 0 000-.65L27.2.206A.688.688 0 0026.705 0a.7.7 0 00-.7.7V4H15a1 1 0 00-1 1v9H3a1 1 0 00-1 1v4a1 1 0 001 1h11v9a1 1 0 001 1h11v3.3a.7.7 0 00.7.7.688.688 0 00.49-.206l5.685-6.469a.5.5 0 000-.65z"}})])
          )
        }
      }
    