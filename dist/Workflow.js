
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
            children.concat([_c('rect',{attrs:{"height":"11.2","rx":"1","ry":"1","width":"8","x":"2","y":"12"}}),_c('rect',{attrs:{"height":"6","rx":"1","ry":"1","width":"6","x":"28","y":"4"}}),_c('rect',{attrs:{"height":"6","rx":"1","ry":"1","width":"6","x":"28","y":"14"}}),_c('rect',{attrs:{"height":"6","rx":"1","ry":"1","width":"6","x":"28","y":"24"}}),_c('path',{attrs:{"d":"M26 7.5v-1a.5.5 0 00-.5-.5h-7a.5.5 0 00-.5.5V16h-5.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H18v9.5a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H20v-8h5.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H20V8h5.5a.5.5 0 00.5-.5z"}})])
          )
        }
      }
    