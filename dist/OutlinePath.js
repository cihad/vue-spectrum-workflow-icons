
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
            children.concat([_c('path',{attrs:{"d":"M10.5 22H6V6h16v4.5h2V5a1 1 0 00-1-1H5a1 1 0 00-1 1v18a1 1 0 001 1h5.5zM31 12h-5.5v2H30v16H14v-4.5h-2V31a1 1 0 001 1h18a1 1 0 001-1V13a1 1 0 00-1-1z"}}),_c('path',{attrs:{"d":"M22 15.5V22h-6.5v2H23a1 1 0 001-1v-7.5zM20.5 12H13a1 1 0 00-1 1v7.5h2V14h6.5z"}})])
          )
        }
      }
    