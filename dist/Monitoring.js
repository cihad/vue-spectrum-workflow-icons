
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
            children.concat([_c('path',{attrs:{"d":"M35 2H1a1 1 0 00-1 1v22a1 1 0 001 1h13v3a1 1 0 01-1 1h-2a1 1 0 00-1 1v2a1 1 0 001 1h14a1 1 0 001-1v-2a1 1 0 00-1-1h-2a1 1 0 01-1-1v-3h13a1 1 0 001-1V3a1 1 0 00-1-1zm-3 15.883h-7.778a1.378 1.378 0 01-1.237-.83l-2.3-5-4.249 8.072a1.368 1.368 0 01-1.2.757H15.2a1.383 1.383 0 01-1.2-.83l-1.845-4-1.065 1.317a1.337 1.337 0 01-1.041.514H4V14h5l2.428-3.609a1.346 1.346 0 011.217-.5 1.4 1.4 0 011.061.818l1.61 3.5 4.249-8.072a1.405 1.405 0 011.235-.761 1.378 1.378 0 011.2.829L25.5 14H32z"}})])
          )
        }
      }
    