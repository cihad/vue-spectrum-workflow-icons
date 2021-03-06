
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
            children.concat([_c('path',{attrs:{"d":"M11 30H9a.979.979 0 00-1 1v1h10V22H4V4h24v2h4V1a1 1 0 00-1-1H1a1 1 0 00-1 1v24a1 1 0 001 1h11v3a1 1 0 01-1 1z"}}),_c('path',{attrs:{"d":"M34 8H22a2 2 0 00-2 2v24a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2zm-7 2h2a1 1 0 010 2h-2a1 1 0 010-2zm1 25.1a2.1 2.1 0 112.1-2.1 2.1 2.1 0 01-2.1 2.1zm6-5.1H22V14h12z"}})])
          )
        }
      }
    