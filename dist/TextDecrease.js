
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
            children.concat([_c('path',{attrs:{"d":"M35.9 27a8.9 8.9 0 10-8.9 8.9 8.9 8.9 0 008.9-8.9zm-3.863-2.171l-4.614 7.3a.5.5 0 01-.845 0l-4.614-7.3A.5.5 0 0122.34 24h9.321a.5.5 0 01.376.829z"}}),_c('path',{attrs:{"d":"M16 27.1V8h8v3a1 1 0 001 1h2a1 1 0 001-1V5a1 1 0 00-1-1H1a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1V8h8v20H9a1 1 0 00-1 1v2a1 1 0 001 1h8.172A10.82 10.82 0 0116 27.1z"}})])
          )
        }
      }
    