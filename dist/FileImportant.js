
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
            children.concat([_c('path',{attrs:{"d":"M19 14a1 1 0 01-1-1V2H7a1 1 0 00-1 1v30a1 1 0 001 1h22a1 1 0 001-1V14zm-8.763-2.172a.362.362 0 01.171-.373 5.889 5.889 0 012.035-.408 6.662 6.662 0 012.071.306.424.424 0 01.2.374v2.443a78.132 78.132 0 01-.679 7.884c0 .1-.033.2-.237.2h-2.711a.224.224 0 01-.237-.2c-.069-.951-.612-4.931-.612-7.782zm2.206 18.6a2.635 2.635 0 01-2.9-2.7 2.739 2.739 0 012.9-2.777 2.7 2.7 0 012.9 2.777 2.635 2.635 0 01-2.9 2.701z"}}),_c('path',{attrs:{"d":"M20 2v10h10L20 2z"}})])
          )
        }
      }
    