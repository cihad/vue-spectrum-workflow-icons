
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
            children.concat([_c('path',{attrs:{"d":"M33.072 31.759L24 14V4h1a1 1 0 001-1V1a1 1 0 00-1-1H11a1 1 0 00-1 1v2a1 1 0 001 1h1v10L2.928 31.759A3 3 0 005.659 36h24.682a3 3 0 002.731-4.241zM8.727 24.364L14 14.454V4h8v10.455l2.636 4.909z"}})])
          )
        }
      }
    