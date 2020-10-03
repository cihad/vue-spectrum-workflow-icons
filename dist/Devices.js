
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
            children.concat([_c('path',{attrs:{"d":"M18 22H6V6h28V4a2 2 0 00-2-2H2a2 2 0 00-2 2v20a2 2 0 002 2h16zM3 16.5A2.5 2.5 0 115.5 14 2.5 2.5 0 013 16.5z"}}),_c('path',{attrs:{"d":"M34 8H22a2 2 0 00-2 2v24a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2zm-7 2h2a1 1 0 010 2h-2a1 1 0 010-2zm1 25.1a2.1 2.1 0 112.1-2.1 2.1 2.1 0 01-2.1 2.1zm6-5.1H22V14h12z"}})])
          )
        }
      }
    