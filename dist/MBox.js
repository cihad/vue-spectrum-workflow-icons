
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
            children.concat([_c('path',{attrs:{"d":"M33 4H3a1 1 0 00-1 1v26a1 1 0 001 1h30a1 1 0 001-1V5a1 1 0 00-1-1zm-1 26H4V10h28z"}}),_c('path',{attrs:{"d":"M6 12h2v2H6zm0 10h2v2H6zm4-10h4v2h-4zm6 0h4v2h-4zm6 0h4v2h-4zM10 26h4v2h-4zm6 0h4v2h-4zm6 0h4v2h-4zm6-14h2v2h-2zm0 4h2v2h-2zM6 16h2v4H6zm22 4h2v4h-2zM6 26h2v2H6zm22 0h2v2h-2z"}})])
          )
        }
      }
    