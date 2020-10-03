
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
            children.concat([_c('path',{attrs:{"d":"M32 24.5V30h-5.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H34v-7.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5zM4 30v-5.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V32h7.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zM26 4.5v1a.5.5 0 00.5.5H32v5.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V4h-7.5a.5.5 0 00-.5.5zM4 6h5.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H2v7.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5z"}}),_c('rect',{attrs:{"height":"16","rx":".5","ry":".5","width":"20","x":"8","y":"10"}})])
          )
        }
      }
    