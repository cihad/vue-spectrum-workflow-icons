
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
            children.concat([_c('path',{attrs:{"d":"M20 2v10h10L20 2z"}}),_c('path',{attrs:{"d":"M22.821 24.77a1.856 1.856 0 101.857 1.856 1.855 1.855 0 00-1.857-1.856zM19 14a1 1 0 01-1-1V2H7a1 1 0 00-1 1v30a1 1 0 001 1h22a1 1 0 001-1V14zm2.154 15.952a4.395 4.395 0 01-3.683-3.686 4.49 4.49 0 01.048-1.569L15.4 22.509v-1.957h-2.363a.339.339 0 01-.338-.337v-2.362h-2.361a.338.338 0 01-.338-.337v-3.374a.338.338 0 01.338-.337h1.546a.349.349 0 01.239.1l7.766 7.766a4.342 4.342 0 012-.442 4.451 4.451 0 014.3 4.682 4.387 4.387 0 01-5.035 4.041z"}})])
          )
        }
      }
    