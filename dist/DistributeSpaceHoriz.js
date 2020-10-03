
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
            children.concat([_c('rect',{attrs:{"height":"24","rx":"1","ry":"1","width":"10","x":"4","y":"10"}}),_c('rect',{attrs:{"height":"16","rx":"1","ry":"1","width":"12","x":"20","y":"12"}}),_c('path',{attrs:{"d":"M20 7.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V4h3.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H22V.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V2h-6V.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V2H8.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H12v3.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V4h6z"}})])
          )
        }
      }
    