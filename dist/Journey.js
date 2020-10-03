
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
            children.concat([_c('path',{attrs:{"d":"M29 22.2a2.8 2.8 0 11-2.8 2.8 2.8 2.8 0 012.8-2.8zm0-4.2a7 7 0 00-7 7c0 3.866 7 11 7 11s7-7.134 7-11a7 7 0 00-7-7z"}}),_c('path',{attrs:{"d":"M20.775 28H20a2 2 0 01-2-2V10a2 2 0 012-2h4.1a5 5 0 100-2H20a4 4 0 00-4 4v6h-4.1a5 5 0 100 2H16v8a4 4 0 004 4h1.825a19.039 19.039 0 01-1.05-2zM29 4a3 3 0 11-3 3 3 3 0 013-3zM7 20a3 3 0 113-3 3 3 0 01-3 3z"}})])
          )
        }
      }
    