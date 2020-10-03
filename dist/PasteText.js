
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
            children.concat([_c('path',{attrs:{"d":"M22 6V4a4 4 0 00-8 0v2h-4v4h16V6zm-2 0h-4V4a2 2 0 014 0z"}}),_c('path',{attrs:{"d":"M31 6h-3v5a1 1 0 01-1 1H9a1 1 0 01-1-1V6H5a1 1 0 00-1 1v26a1 1 0 001 1h26a1 1 0 001-1V7a1 1 0 00-1-1zm-5 13.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V18h-4v10h1.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H16V18h-4v1.473a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V16.5a.5.5 0 01.5-.5h15a.5.5 0 01.5.5z"}})])
          )
        }
      }
    