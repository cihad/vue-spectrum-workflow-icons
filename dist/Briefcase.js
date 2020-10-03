
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
            children.concat([_c('path',{attrs:{"d":"M20 18v3.287a.75.75 0 01-.75.75L16.75 22a.75.75 0 01-.75-.75V18H0v13a1 1 0 001 1h34a1 1 0 001-1V18zm15-8h-9V6a2 2 0 00-2-2H12a2 2 0 00-2 2v4H1a1 1 0 00-1 1v5h16v-1.361a.75.75 0 01.75-.75l2.5.037a.75.75 0 01.75.75V16h16v-5a1 1 0 00-1-1zM13 7h10v3H13z"}})])
          )
        }
      }
    