
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
            children.concat([_c('path',{attrs:{"d":"M29 16H11.9v-5.647A6.213 6.213 0 0118 4a6.143 6.143 0 015.508 3.419c.31.639.266 1.146.777 1.146a.508.508 0 00.186-.036l2.681-1.069a.513.513 0 00.322-.471A9.92 9.92 0 0018 .1C11.5.1 8 6.067 8 10.292V16H7a1 1 0 00-1 1v16a1 1 0 001 1h22a1 1 0 001-1V17a1 1 0 00-1-1zm-9 10.222V29a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2.778a3 3 0 114 0z"}})])
          )
        }
      }
    