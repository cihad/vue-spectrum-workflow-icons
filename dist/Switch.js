
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
            children.concat([_c('path',{attrs:{"d":"M36 18l-9.146-9.146a.5.5 0 00-.854.353V14H10V9.207a.5.5 0 00-.854-.354L0 18l9.146 9.146a.5.5 0 00.854-.353V22h16v4.793a.5.5 0 00.854.354z"}})])
          )
        }
      }
    