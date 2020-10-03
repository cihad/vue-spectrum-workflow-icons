
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
            children.concat([_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"12","x":"2","y":"8"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"16","x":"2","y":"16"}}),_c('rect',{attrs:{"height":"4","rx":"1","ry":"1","width":"20","x":"2","y":"24"}}),_c('path',{attrs:{"d":"M32 24h-2.007V9a.988.988 0 00-.987-1h-.992a1 1 0 00-1 1l-.007 15H25a.5.5 0 00-.5.5.49.49 0 00.147.35l3.537 4.033a.5.5 0 00.632 0l3.537-4.033a.49.49 0 00.147-.35.5.5 0 00-.5-.5z"}})])
          )
        }
      }
    