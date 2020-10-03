
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
            children.concat([_c('path',{attrs:{"d":"M30 26V12a6 6 0 00-6-6H10V1.207a.5.5 0 00-.854-.353L0 10l9.146 9.146a.5.5 0 00.854-.353V14h12v12h-4.793a.5.5 0 00-.354.854L26 36l9.146-9.146a.5.5 0 00-.353-.854z"}})])
          )
        }
      }
    