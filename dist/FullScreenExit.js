
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
            children.concat([_c('path',{attrs:{"d":"M6 2.5V8H.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H8V2.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5zM30 8V2.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V10h7.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zM0 26.5v1a.5.5 0 00.5.5H6v5.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V26H.5a.5.5 0 00-.5.5zM30 28h5.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H28v7.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5z"}}),_c('rect',{attrs:{"height":"16","rx":".5","ry":".5","width":"20","x":"8","y":"10"}})])
          )
        }
      }
    