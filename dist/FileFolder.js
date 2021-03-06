
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
            children.concat([_c('path',{attrs:{"d":"M20 2v10h10L20 2z"}}),_c('path',{attrs:{"d":"M18 33.5V23a3 3 0 013-3h4.586a2.982 2.982 0 012.121.879L30 23.172V14H19a1 1 0 01-1-1V2H7a1 1 0 00-1 1v30a1 1 0 001 1h11.1a2.385 2.385 0 01-.1-.5z"}}),_c('path',{attrs:{"d":"M33.5 34h-13a.5.5 0 01-.5-.5V26h13.5a.5.5 0 01.5.5v7a.5.5 0 01-.5.5zM28 24l-1.707-1.707a1 1 0 00-.707-.293H21a1 1 0 00-1 1v1z"}})])
          )
        }
      }
    