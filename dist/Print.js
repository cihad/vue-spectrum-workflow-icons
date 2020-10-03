
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
            children.concat([_c('path',{attrs:{"d":"M35 10h-5V3a1 1 0 00-1-1H7a1 1 0 00-1 1v7H1a1 1 0 00-1 1v14a1 1 0 001 1h3v7a1 1 0 001 1h26a1 1 0 001-1v-7h3a1 1 0 001-1V11a1 1 0 00-1-1zM8 4h20v6H8zm22 28H6V20h24z"}}),_c('path',{attrs:{"d":"M10 26h16v2H10zm0-4h16v2H10z"}})])
          )
        }
      }
    