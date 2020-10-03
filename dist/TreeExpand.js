
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
            children.concat([_c('path',{attrs:{"d":"M4 5v26a1 1 0 001 1h26a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1zm21.5 15H20v5.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V20h-5.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H16v-5.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V16h5.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5z"}})])
          )
        }
      }
    