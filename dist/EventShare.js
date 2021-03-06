
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
            children.concat([_c('path',{attrs:{"d":"M4 4h16v8l1.739 1.739L24 11.232V0H0v24h6v-4H4V4z"}}),_c('path',{attrs:{"d":"M18.384 17.626l-9.53-9.479A.491.491 0 008.5 8a.5.5 0 00-.5.5v22.782a.5.5 0 00.5.5.491.491 0 00.35-.148L14 24.656V22a2 2 0 012-2h2.233a2.976 2.976 0 01.151-2.374zm13.338.705L26 12l-5.708 6.331A1 1 0 0021.035 20H24v7.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V20h2.979a1 1 0 00.743-1.669z"}}),_c('path',{attrs:{"d":"M32 22v10H20V22h-3a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V23a1 1 0 00-1-1z"}})])
          )
        }
      }
    