
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","width":"36","height":"36"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M35.634 33.866l-5.168-5.168a8.02 8.02 0 10-1.768 1.768l5.168 5.168a1.25 1.25 0 001.768-1.768zM18 24a6 6 0 116 6 6 6 0 01-6-6zm-1.227-6.883l-5.5-5.5a2 2 0 00-2.829-.001L2 18.058V4h28v12.045a10.01 10.01 0 012 2.01V3a1 1 0 00-1-1H1a1 1 0 00-1 1v22a1 1 0 001 1h13.202a9.946 9.946 0 012.571-8.883zM22 10.051a2.7 2.7 0 102.7-2.7 2.7 2.7 0 00-2.7 2.7z"}})])
          )
        }
      }
    