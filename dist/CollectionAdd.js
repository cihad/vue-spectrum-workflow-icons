
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
            children.concat([_c('path',{attrs:{"d":"M18.1 25a8.9 8.9 0 108.9-8.9 8.9 8.9 0 00-8.9 8.9zm3.9-.5a.5.5 0 01.5-.5H26v-3.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V24h3.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H28v3.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V26h-3.5a.5.5 0 01-.5-.5z"}}),_c('path',{attrs:{"d":"M15.084 28H14V18h2.893a12.368 12.368 0 011.743-2H14V6h8v7.769a12.2 12.2 0 012-.685V6h8v7.769a12.274 12.274 0 012 1.124V5a1 1 0 00-1-1H3a1 1 0 00-1 1v24a1 1 0 001 1h12.769a12.2 12.2 0 01-.685-2zM12 28H4V18h8zm0-12H4V6h8z"}})])
          )
        }
      }
    