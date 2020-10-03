
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
            children.concat([_c('path',{attrs:{"d":"M29 4H7a1 1 0 00-1 1v9h24V5a1 1 0 00-1-1zM6 31a1 1 0 001 1h22a1 1 0 001-1v-9H6z"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"32","x":"2","y":"16"}})])
          )
        }
      }
    