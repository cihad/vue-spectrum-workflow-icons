
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
            children.concat([_c('path',{attrs:{"d":"M33.5 10a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5h-7a.5.5 0 00-.5.5V4H10V2.5a.5.5 0 00-.5-.5h-7a.5.5 0 00-.5.5v7a.5.5 0 00.5.5H4v16H2.5a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h7a.5.5 0 00.5-.5V32h16v1.5a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5H32V10zM4 4h4v4H4zm4 28H4v-4h4zm18-5.5V30H10v-3.5a.5.5 0 00-.5-.5H6V10h3.5a.5.5 0 00.5-.5V6h16v3.5a.5.5 0 00.5.5H30v16h-3.5a.5.5 0 00-.5.5zm6 5.5h-4v-4h4zM28 8V4h4v4z"}})])
          )
        }
      }
    