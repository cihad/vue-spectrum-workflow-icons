
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
            children.concat([_c('rect',{attrs:{"height":"20","rx":"1","ry":"1","width":"20","x":"12","y":"12"}}),_c('path',{attrs:{"d":"M10 10h14V5a1 1 0 00-1-1H5a1 1 0 00-1 1v18a1 1 0 001 1h5z"}})])
          )
        }
      }
    