
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
            children.concat([_c('path',{attrs:{"d":"M10 10V5.207a.5.5 0 00-.854-.354L0 14l9.146 9.146a.5.5 0 00.854-.353V18h16v13a1 1 0 001 1h6a1 1 0 001-1V16a6 6 0 00-6-6z"}})])
          )
        }
      }
    