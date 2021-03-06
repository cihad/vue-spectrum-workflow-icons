
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
            children.concat([_c('path',{attrs:{"d":"M33 2H3a1 1 0 00-1 1v24a1 1 0 001 1h11l3.536 6.839a.5.5 0 00.928 0L22 28h11a1 1 0 001-1V3a1 1 0 00-1-1zM8.5 8h17a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zm17 14h-17a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h17a.5.5 0 01.5.5v1a.5.5 0 01-.5.5zm4-6h-21a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h21a.5.5 0 01.5.5v1a.5.5 0 01-.5.5z"}})])
          )
        }
      }
    