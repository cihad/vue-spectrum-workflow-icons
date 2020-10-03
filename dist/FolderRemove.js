
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
            children.concat([_c('path',{attrs:{"d":"M16 6H2V3.5A1.5 1.5 0 013.5 2h7.672a2 2 0 011.414.586zm-1.3 21A12.3 12.3 0 0134 16.886V9a1 1 0 00-1-1H2v21a1 1 0 001 1h12.069a12.3 12.3 0 01-.369-3z"}}),_c('path',{attrs:{"d":"M27.1 18.2a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm5.826 12.267a.5.5 0 010 .707l-1.752 1.752a.5.5 0 01-.707 0L27.1 29.559l-3.367 3.367a.5.5 0 01-.707 0l-1.752-1.752a.5.5 0 010-.707l3.367-3.367-3.367-3.367a.5.5 0 010-.707l1.752-1.752a.5.5 0 01.707 0l3.367 3.367 3.367-3.367a.5.5 0 01.707 0l1.752 1.752a.5.5 0 010 .707L29.559 27.1z"}})])
          )
        }
      }
    