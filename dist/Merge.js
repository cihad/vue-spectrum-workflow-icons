
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
            children.concat([_c('path',{attrs:{"d":"M27.2 10.206a.688.688 0 00-.49-.206.7.7 0 00-.7.7V14H18V5a1 1 0 00-1-1H3a1 1 0 00-1 1v4a1 1 0 001 1h9v14H3a1 1 0 00-1 1v4a1 1 0 001 1h14a1 1 0 001-1v-9h8v3.3a.7.7 0 00.7.7.688.688 0 00.49-.206l5.685-6.469a.5.5 0 000-.65z"}})])
          )
        }
      }
    