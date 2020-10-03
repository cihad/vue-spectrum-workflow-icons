
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
            children.concat([_c('path',{attrs:{"d":"M26 10V5.207a.5.5 0 01.854-.354L36 14l-9.146 9.146a.5.5 0 01-.854-.353V18H10v13a1 1 0 01-1 1H3a1 1 0 01-1-1V16a6 6 0 016-6z"}})])
          )
        }
      }
    