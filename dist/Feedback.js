
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
            children.concat([_c('path',{attrs:{"d":"M30 2H6a4 4 0 00-4 4v16a4 4 0 004 4h2v8.793a.5.5 0 00.854.354L18 26h12a4 4 0 004-4V6a4 4 0 00-4-4zM8 17.35a3.85 3.85 0 113.85-3.85A3.85 3.85 0 018 17.35zm10 0a3.85 3.85 0 113.85-3.85A3.85 3.85 0 0118 17.35zm10 0a3.85 3.85 0 113.85-3.85A3.85 3.85 0 0128 17.35z"}})])
          )
        }
      }
    