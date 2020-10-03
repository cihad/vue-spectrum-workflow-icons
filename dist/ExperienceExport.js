
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
            children.concat([_c('path',{attrs:{"d":"M30 28H12v-4h7.6v-2H12v-4h7.6v-2H4V8h26V5a1 1 0 00-1-1H1a1 1 0 00-1 1v26a1 1 0 001 1h28a1 1 0 001-1zm-20 0H4V18h6z"}}),_c('path',{attrs:{"d":"M28 14v-3.328a.5.5 0 01.866-.341L36 18l-7.134 7.669a.5.5 0 01-.866-.341V22h-5a1 1 0 01-1-1v-6a1 1 0 011-1z"}})])
          )
        }
      }
    