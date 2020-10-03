
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
            children.concat([_c('path',{attrs:{"d":"M12 35V23a2.976 2.976 0 01.031-.3l-5.3 1.667L12 14.453V4h8v9.45l2-2.218V4h1a1 1 0 001-1V1a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 001 1h1v10L.928 31.759A3 3 0 003.659 36h8.525A2.972 2.972 0 0112 35z"}}),_c('path',{attrs:{"d":"M29.722 18.331L24 12l-5.708 6.331A1 1 0 0019.035 20H22v7.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V20h2.979a1 1 0 00.743-1.669z"}}),_c('path',{attrs:{"d":"M30 22v10H18V22h-3a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V23a1 1 0 00-1-1z"}})])
          )
        }
      }
    