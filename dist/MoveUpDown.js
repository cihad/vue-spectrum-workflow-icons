
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
            children.concat([_c('path',{attrs:{"d":"M23.517 6.311A1 1 0 0122.8 8H20v6h-6V8h-2.778a1.006 1.006 0 01-.722-1.707L17 0zM23.5 29.707A1.006 1.006 0 0022.778 28H20v-6h-6v6h-2.8a1 1 0 00-.715 1.689L17 36z"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"30","x":"2","y":"16"}})])
          )
        }
      }
    