
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
            children.concat([_c('path',{attrs:{"d":"M20.5 14.054a.494.494 0 00-.5.5v19.782a.494.494 0 00.846.353L26.51 29h8c.446 0 .479-.726.225-.98L20.846 14.2a.489.489 0 00-.346-.146z"}}),_c('path',{attrs:{"d":"M2 2v10.476A10.735 10.735 0 016 10.3V6h22v11.158l4 4V2z"}}),_c('path',{attrs:{"d":"M9 12.367a8.25 8.25 0 00-8.25 8.25C.75 25.173 9 35.57 9 35.57s8.25-10.4 8.25-14.953A8.25 8.25 0 009 12.367zm0 11.75a3.5 3.5 0 113.5-3.5 3.5 3.5 0 01-3.5 3.5z"}})])
          )
        }
      }
    