
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
            children.concat([_c('path',{attrs:{"d":"M33 10H6V4h27a1 1 0 011 1v4a1 1 0 01-1 1zm-10 8H6v-6h17a1 1 0 011 1v4a1 1 0 01-1 1zm-8 8H6v-6h9a1 1 0 011 1v4a1 1 0 01-1 1zm-4 8H6v-6h5a1 1 0 011 1v4a1 1 0 01-1 1z"}}),_c('rect',{attrs:{"height":"34","rx":".5","ry":".5","width":"2","x":"2","y":"2"}})])
          )
        }
      }
    