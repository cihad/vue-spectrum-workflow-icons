
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
            children.concat([_c('path',{attrs:{"d":"M6 22h12v4H6zm14 0h4v4h-4zm6 0h4v4h-4zM6 14h24v6H6z"}}),_c('path',{attrs:{"d":"M33 4H3a1 1 0 00-1 1v24a1 1 0 001 1h30a1 1 0 001-1V5a1 1 0 00-1-1zM4 28V10h28v18z"}})])
          )
        }
      }
    