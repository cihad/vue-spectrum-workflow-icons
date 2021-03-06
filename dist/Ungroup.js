
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
            children.concat([_c('rect',{attrs:{"height":"7","rx":"1","ry":"1","width":"7","x":"20.5","y":"20.5"}}),_c('path',{attrs:{"d":"M35.5 18a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5V14H18v-1.5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5v5a.5.5 0 00.5.5H14v12h-1.5a.5.5 0 00-.5.5v5a.5.5 0 00.5.5h5a.5.5 0 00.5-.5V34h12v1.5a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5H34V18zM32 30h-1.5a.5.5 0 00-.5.5V32H18v-1.5a.5.5 0 00-.5-.5H16V18h1.5a.5.5 0 00.5-.5V16h12v1.5a.5.5 0 00.5.5H32z"}}),_c('path',{attrs:{"d":"M10 11a1 1 0 011-1h4.5v-.5a1 1 0 00-1-1h-5a1 1 0 00-1 1v5a1 1 0 001 1h.5z"}}),_c('path',{attrs:{"d":"M10 20H6v-1.5a.5.5 0 00-.5-.5H4V6h1.5a.5.5 0 00.5-.5V4h12v1.5a.5.5 0 00.5.5H20v4h2V6h1.5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5V2H6V.5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5v5a.5.5 0 00.5.5H2v12H.5a.5.5 0 00-.5.5v5a.5.5 0 00.5.5h5a.5.5 0 00.5-.5V22h4z"}})])
          )
        }
      }
    