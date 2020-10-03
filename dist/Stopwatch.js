
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
            children.concat([_c('path',{attrs:{"d":"M20 2h1a1 1 0 000-2h-4a1 1 0 000 2h1v2h2z"}}),_c('path',{attrs:{"d":"M19 4a14.94 14.94 0 00-9.9 3.729L7.437 6.062l.708-.707A1 1 0 106.73 3.941l-.707.707-1.414 1.414-.709.708a1 1 0 001.416 1.414l.707-.707 1.669 1.668A15 15 0 1019 4zm0 28a13 13 0 117.833-23.375l-8.925 8.925c-.021.021-.037.04-.057.062a1.858 1.858 0 102.619 2.635c.023-.021.046-.045.068-.067l8.913-8.912A13 13 0 0119 32z"}})])
          )
        }
      }
    